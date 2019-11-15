export interface AzureBuildOptions {
  libInput: string;
  libOutput: string;
  browserOutput: string;
  browserGlobalName: string;
  testInput: string | string[];
  nodeTestInput: string | string[];
  browserTestInput: string | string[];
  testOutput: string;
  node: boolean;
  browser: boolean;
  tests: boolean;
  library: boolean;
  minify: boolean;
  rootDir: string;
  shims: { [module: string]: string};
  noReplace: boolean;
}

export interface AzureBuildTargetOptions {
    platform: 'node' | 'browser';
    test: boolean
}