import {
  AzureTargetDefinition,
  AzureBuildTarget,
  AzureLibraryBuildOptions
} from "../AzureBuildOptions";
import sourcemaps from "./sourcemaps";
import nodeResolve from "./nodeResolve";
import cjs from "./cjs";
import json from "./json";
import replace from "./replace";
import terser from "./terser";
import multientry from "./multientry";
import shim from "./shim";

export default function(
  target: AzureBuildTarget,
  targetDef: AzureTargetDefinition,
  options: AzureLibraryBuildOptions
) {
  return [
    Array.isArray(targetDef.input) ? multientry() : undefined,
    sourcemaps(),
    targetDef.noReplace || options.skipReplace ? undefined : replace(target),
    targetDef.shims ? shim(target, targetDef) : undefined,
    nodeResolve(target),
    cjs(),
    json(),
    options.skipMinify ? undefined : terser()
  ];
}
