import replace from "@rollup/plugin-replace";
import { AzureBuildTarget, isNodeTarget, isBrowserTarget } from "../AzureBuildOptions";

export default function(target: AzureBuildTarget) {
  return replace({
    delimiters: ["", ""],
    values: {
      // replace dynamic checks with if (true) since this is for node only.
      // Allows rollup's dead code elimination to be more aggressive.
      "if (isNode)": `if (${isNodeTarget(target)})`,
      "if (!isNode)": `if (${isBrowserTarget(target)})`
    }
  });
}
