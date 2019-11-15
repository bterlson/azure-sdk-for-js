import shim from "rollup-plugin-shim";
import { AzureBuildTargetOptions, AzureBuildOptions } from "../AzureBuildOptions";

export default function(_target: AzureBuildTargetOptions, options: AzureBuildOptions) {
  return shim(options.shims);
}
