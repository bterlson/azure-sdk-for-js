import { AzureBuildTargetOptions, AzureBuildOptions } from "../AzureBuildOptions";
import sourcemaps from "./sourcemaps";
import nodeResolve from "./nodeResolve";
import cjs from "./cjs";
import json from "./json";
import replace from "./replace";
import terser from "./terser";
import multientry from "./multientry";
import shim from "./shim";

export default function(target: AzureBuildTargetOptions, options: AzureBuildOptions) {
  return [
    target.test ? multientry() : undefined,
    sourcemaps(),
    options.noReplace ? undefined : replace(target),
    options.shims ? shim(target, options) : undefined,
    nodeResolve(target, options),
    cjs(),
    json(),
    options.minify ? terser() : undefined
  ]
}