import { RollupOptions, RollupBuild } from "rollup";
import { AzureBuildOptions, AzureBuildTargetOptions } from "./AzureBuildOptions";
import nodeBuiltins from "builtin-modules";
import { join, basename, extname } from "path";
import { readFileSync } from "fs";
import onwarn from "./onwarn";
import plugins from "./plugins/plugins";

function getDefaultOptions(options: AzureBuildOptions) {
  const defaultOptions: Partial<AzureBuildOptions> = {};
  defaultOptions.library = true;
  defaultOptions.libInput = getPkgJson(options).module;
  defaultOptions.libOutput = "./dist";
  defaultOptions.testOutput = "./dist-test"
  defaultOptions.browserOutput = "./browser";
  defaultOptions.nodeTestInput = options.testInput;
  defaultOptions.browserTestInput = options.testInput;
  return defaultOptions;
}

export function getRollupConfig(options: AzureBuildOptions): RollupOptions[] {
  options = { ...getDefaultOptions(options), ...getEnvOptions(), ...options };

  const configs: RollupOptions[] = [];

  if (options.library) {
    if (options.node) {
      configs.push(getBaseConfig({ platform: "node", test: false }, options));
    }

    if (options.browser) {
      configs.push(getBaseConfig({ platform: "browser", test: false }, options));
    }
  }

  if (options.tests) {
    if (options.node) {
      configs.push(getBaseConfig({ platform: "node", test: true }, options));
    }

    if (options.browser) {
      configs.push(getBaseConfig({ platform: "browser", test: true }, options));
    }
  }

  return configs;
}

function getBaseConfig(target: AzureBuildTargetOptions, options: AzureBuildOptions): RollupOptions {
  let external: string[] = [];
  let globalNames: any = {};
  let globalCount = 0;

  const pkgJson = getPkgJson(options);

  if (target.platform === "node") {
    external = [
      ...nodeBuiltins,
      ...Object.keys(pkgJson.dependencies),
      ...(target.test ? Object.keys(pkgJson.devDependencies) : [])
    ];
  } else {
    if (pkgJson.browser) {
      // if we have a pkg json browser field and we're disabling
      // modules, we have to mark them as external otherwise rollup
      // will complain about missing exports.
      const disabledModules = [];
      for (const key of Object.keys(pkgJson.browser)) {
        if (pkgJson.browser[key] === false) {
          disabledModules.push(key)
          globalNames[key] = `$UNUSED_${globalCount++}`
        }
      }
      external = disabledModules;
    }
  }

  let inputFile;
  let outputFile;
  const base = basename(options.libInput, extname(options.libInput));
  if (target.test) {
    if (target.platform === "browser") {
      inputFile = options.browserTestInput;
      outputFile = join(options.testOutput, base + ".browser.js");
    } else {
      inputFile = options.nodeTestInput;
      outputFile = join(options.testOutput, base + ".node.js");
    }
  } else {
    inputFile = options.libInput;
    if (target.platform === "browser") {
      outputFile = join(options.browserOutput, base + ".js");
    } else {
      outputFile = join(options.libOutput, base + ".js");
    }
  }

  return {
    input: inputFile,
    output: {
      file: outputFile,
      sourcemap: true,
      format: target.platform === "node" ? "cjs" : "umd",
      globals: globalNames,
      name: options.browserGlobalName
    },
    preserveSymlinks: false,
    external,

    // ignore known warnings
    onwarn,

    // some old plugin has the wrong type here, so any-cast
    plugins: plugins(target, options) as any,

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    treeshake: !target.test
  };
}

function getEnvOptions() {
  const opts: Partial<AzureBuildOptions> = {};

  if (process.env.BUILD_NODE !== undefined) {
    opts.node = !!process.env.BUILD_NODE;
  }

  if (process.env.BUILD_BROWSER !== undefined) {
    opts.browser = !!process.env.BUILD_BROWSER;
  }

  if (process.env.BUILD_LIBRARY !== undefined) {
    opts.library = !!process.env.BUILD_LIBRARY;
  }

  if (process.env.BUILD_TESTS !== undefined) {
    opts.tests = !!process.env.BUILD_TESTS;
  }

  if (process.env.BUILD_MINIFY !== undefined) {
    opts.minify = !!process.env.BUILD_MINIFY;
  }

  return opts;
}

let sourcePkgJson: any = undefined;
function getPkgJson(options: AzureBuildOptions) {
  if (sourcePkgJson) return sourcePkgJson;

  const path = join(options.rootDir, "package.json");
  sourcePkgJson = JSON.parse(readFileSync(path, "utf-8"));

  return sourcePkgJson;
}
