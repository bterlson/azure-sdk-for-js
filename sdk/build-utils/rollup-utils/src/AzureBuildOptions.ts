export type AzureBuildTarget = "main" | "browser" | "testMain" | "testBrowser";
export const AZURE_BUILD_TARGETS = new Set<AzureBuildTarget>([
  "main",
  "browser",
  "testMain",
  "testBrowser"
]);

export function isBuildTarget(target: string): target is AzureBuildTarget {
  return AZURE_BUILD_TARGETS.has(target as AzureBuildTarget);
}

export function isBuildTargetList(targets: string[]): targets is AzureBuildTarget[] {
  for (const target of targets) {
    if (!isBuildTarget(target)) {
      return false;
    }
  }

  return true;
}

export function isNodeTarget(s: AzureBuildTarget): s is "main" | "testMain" {
  return s === "main" || s === "testMain";
}

export function isBrowserTarget(s: AzureBuildTarget): s is "browser" | "testBrowser" {
  return s === "browser" || s === "testBrowser";
}

export function isTestTarget(s: AzureBuildTarget): s is "testBrowser" | "testMain" {
  return s === "testBrowser" || s === "testMain";
}

export interface AzureLibraryBuildOptions {
  targets: AzureBuildTarget[];
  skipMinify: boolean;
  skipReplace: boolean;
}

export interface AzureLibraryDefinition {
  rootDir: string;
  main: boolean | AzureTargetDefinition;
  browser: boolean | AzureTargetDefinition;
  testMain: boolean | AzureTargetDefinition;
  testBrowser: boolean | AzureTargetDefinition;
  noReplace: boolean;
}

export interface AzureTargetDefinition {
  shims?: { [lib: string]: string };
  input: string | string[];
  output: string;
  global?: string;
  noReplace?: boolean;
}
