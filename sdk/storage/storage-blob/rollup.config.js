// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as base from "./rollup.base.config";
/**/
import { createRollupConfig } from "@azure/rollup-utils";

const config = createRollupConfig({
  rootDir: __dirname,
  main: true,
  browser: {
    global: "azblob"
  },
  testMain: {
    input: ["dist-esm/test/*.spec.js", "dist-esm/test/node/*.spec.js"]
  },
  testBrowser: {
    input: ["dist-esm/test/*.spec.js", "dist-esm/test/browser/*.spec.js"],
    shims: {
      dotenv: `export function config() { }`
    }
  }
});

console.log(config);

export default config;
/*
const inputs = [];

if (!process.env.ONLY_BROWSER) {
  inputs.push(base.nodeConfig());
}

// Disable this until we are ready to run rollup for the brows
if (!process.env.ONLY_NODE) {
  inputs.push(base.browserConfig());
}
 // inputs.push(base.nodeConfig());
  inputs.push(base.browserConfig(true));
 // inputs.push(base.browserConfig(false, true));

export default inputs;
/**/
