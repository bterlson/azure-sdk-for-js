import nodeResolve from "rollup-plugin-node-resolve";
import { AzureBuildTarget, AzureLibraryBuildOptions } from "../AzureBuildOptions";

export default function(target: AzureBuildTarget) {
  if (target === "main" || target === "testMain") {
    return nodeResolve({
      preferBuiltins: true,
      mainFields: ["module", "main"]
    });
  } else if (target === "browser" || target === "testBrowser") {
    return nodeResolve({
      preferBuiltins: false,
      mainFields: ["module", "browser", "main"]
    });
  }

  throw new Error(`unknown platform ${target}`);
}
