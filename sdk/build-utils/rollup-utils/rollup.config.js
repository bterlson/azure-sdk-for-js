import { createRollupConfig } from "./dist-esm/buildConfig";

export default createRollupConfig({
  rootDir: __dirname,
  main: {
    noReplace: true
  }
});
