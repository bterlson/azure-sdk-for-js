import * as base from "./rollup.base.config";

const inputs = [];

if (!process.env.ONLY_BROWSER) {
  inputs.push(base.nodeConfig());
}

if (!process.env.ONLY_NODE) {
  // Browser is not supported
  // inputs.push(base.browserConfig());
}

export default inputs;
