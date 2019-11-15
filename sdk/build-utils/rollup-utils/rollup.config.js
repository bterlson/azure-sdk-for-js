import { getRollupConfig } from "./dist-esm/buildConfig";

export default getRollupConfig({
  rootDir: __dirname,
  node: true,
  tests: false,
  noReplace: true
})