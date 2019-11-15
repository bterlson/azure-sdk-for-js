import replace from "@rollup/plugin-replace";
import { AzureBuildTargetOptions } from "../AzureBuildOptions";

export default function(target: AzureBuildTargetOptions) {
  return replace({
    delimiters: ["", ""],
    values: {
      // replace dynamic checks with if (true) since this is for node only.
      // Allows rollup's dead code elimination to be more aggressive.
      "if (isNode)": `if (${target.platform === 'node'})`,
      "if (!isNode)": `if (${target.platform === 'browser'})`
    }
  });
}
