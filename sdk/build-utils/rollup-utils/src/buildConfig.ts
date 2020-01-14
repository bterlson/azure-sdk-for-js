import { RollupOptions, RollupBuild } from "rollup";
import {
  AzureLibraryDefinition,
  AzureTargetDefinition,
  AzureLibraryBuildOptions,
  isBuildTargetList,
  AZURE_BUILD_TARGETS,
  AzureBuildTarget,
  isTestTarget
} from "./AzureBuildOptions";
import nodeBuiltins from "builtin-modules";
import { join, basename, extname } from "path";
import { readFileSync } from "fs";
import onwarn from "./onwarn";
import plugins from "./plugins/plugins";

export function createRollupConfig(def: AzureLibraryDefinition): RollupOptions[] {
  const configs: RollupOptions[] = [];
  const options = getEnvOptions();
  const defaults = getDefaults(def);
  const pkgJson = getPkgJson(def);

  for (const target of AZURE_BUILD_TARGETS.values()) {
    const targetDef = def[target];

    if (targetDef) {
      const defWithDefaults: AzureTargetDefinition =
        typeof targetDef === "boolean" ? defaults[target] : { ...defaults[target], ...targetDef };

      const config = getBaseConfig(target, defWithDefaults, pkgJson, options);
      console.log("config for", target, defWithDefaults, config);
      configs.push(config);
    }
  }

  return configs;
}

function getDefaults(def: AzureLibraryDefinition) {
  const mainName = getPkgJson(def).main;
  const baseName = basename(mainName, extname(mainName));

  return {
    main: {
      input: getPkgJson(def).module,
      output: getPkgJson(def).main
    },
    testMain: {
      input: "./dist-esm/test/**/*.spec.js",
      output: `./dist-test/${baseName}.node.js`
    },
    browser: {
      input: getPkgJson(def).module,
      output:
        typeof getPkgJson(def).browser === "string"
          ? typeof getPkgJson(def).browser
          : `./browser/${baseName}.js` // TODO: Could probably map main using the browser map here.
    },
    testBrowser: {
      input: "./dist-esm/test/**/*.spec.js",
      output: `./dist-test/${baseName}.node.js`
    }
  };
}

function getBaseConfig(
  target: AzureBuildTarget,
  targetDef: AzureTargetDefinition,
  pkgJson: any,
  options: AzureLibraryBuildOptions
): RollupOptions {
  let external: string[] = [];
  let globalNames: any = {};
  let globalCount = 0;

  if (target === "main" || target === "testMain") {
    external = [
      ...nodeBuiltins,
      ...Object.keys(pkgJson.dependencies),
      ...(target === "testMain" ? Object.keys(pkgJson.devDependencies) : [])
    ];
  } else {
    if (pkgJson.browser) {
      // if we have a pkg json browser field and we're disabling
      // modules, we have to mark them as external otherwise rollup
      // will complain about missing exports.
      const disabledModules = [];
      for (const key of Object.keys(pkgJson.browser)) {
        if (pkgJson.browser[key] === false) {
          disabledModules.push(key);
          globalNames[key] = `$UNUSED_${globalCount++}`;
        }
      }
      external = disabledModules;
    }
  }

  return {
    input: targetDef.input,
    output: {
      file: targetDef.output,
      sourcemap: true,
      format: target === "main" || target === "testMain" ? "cjs" : "umd",
      globals: globalNames,
      name: targetDef.global
    },
    preserveSymlinks: false,
    external,

    // ignore known warnings
    onwarn,

    // some old plugin has the wrong type here, so any-cast
    plugins: plugins(target, targetDef, options) as any,

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    treeshake: isTestTarget(target)
  };
}

function getEnvOptions(): AzureLibraryBuildOptions {
  const opts: Partial<AzureLibraryBuildOptions> = {};

  if (process.env.AZURE_BUILD_TARGETS !== undefined) {
    const selectedTargets = process.env.AZURE_BUILD_TARGETS.split(",");

    if (isBuildTargetList(selectedTargets)) {
      opts.targets = selectedTargets;
    } else {
      throw new Error("Invalid build target");
    }
  } else {
    opts.targets = Array.from(AZURE_BUILD_TARGETS.values()) as AzureBuildTarget[];
  }

  if (process.env.BUILD_MINIFY !== undefined) {
    opts.skipMinify = !!process.env.AZURE_BUILD_NO_MINIFY;
  } else {
    opts.skipMinify = false;
  }

  return opts as AzureLibraryBuildOptions;
}

let sourcePkgJson: any = undefined;
function getPkgJson(def: AzureLibraryDefinition) {
  if (sourcePkgJson) return sourcePkgJson;

  const path = join(def.rootDir, "package.json");
  sourcePkgJson = JSON.parse(readFileSync(path, "utf-8"));

  return sourcePkgJson;
}
