// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


import * as base from "./rollup.base.config";
/**/
import { getRollupConfig } from "@azure/rollup-utils";
const config = getRollupConfig({
  rootDir: __dirname,
  node: true,
  library: true,
  tests: true,
  browser: true,
  browserGlobalName: "azblob",
  nodeTestInput: ["dist-esm/test/*.spec.js", "dist-esm/test/node/*.spec.js"],
  browserTestInput: ["dist-esm/test/*.spec.js", "dist-esm/test/browser/*.spec.js"],
  shims: {
    dotenv: `export function config() { }`
  }
});
export default config;
/*
const inputs = [];

if (!process.env.ONLY_BROWSER) {
  inputs.push(base.nodeConfig());
}

// Disable this until we are ready to run rollup for the browser.
if (!process.env.ONLY_NODE) {
  inputs.push(base.browserConfig());
}
 // inputs.push(base.nodeConfig());
  inputs.push(base.browserConfig(true));
 // inputs.push(base.browserConfig(false, true));

export default inputs;
/**/
