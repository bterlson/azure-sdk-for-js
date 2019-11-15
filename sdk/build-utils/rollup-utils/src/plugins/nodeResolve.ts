import nodeResolve from "rollup-plugin-node-resolve";
import { AzureBuildOptions, AzureBuildTargetOptions } from "../AzureBuildOptions";

export default function(target: AzureBuildTargetOptions, options: AzureBuildOptions) {
  if (target.platform === 'node') {
    return nodeResolve({
      preferBuiltins: true,
      mainFields: ["module", "main"]
    })
  } else if (target.platform === 'browser') {
    return nodeResolve({
      preferBuiltins: false,
      mainFields: ["module", "browser"]
    })
  }

  throw new Error(`unknown platform ${target.platform}`);
}