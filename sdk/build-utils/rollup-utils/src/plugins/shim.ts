import shim from "rollup-plugin-shim";
import { AzureTargetDefinition, AzureBuildTarget } from "../AzureBuildOptions";

export default function(target: AzureBuildTarget, targetDef: AzureTargetDefinition) {
  return shim(targetDef.shims);
}
