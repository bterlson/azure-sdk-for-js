import { WarningHandler } from "rollup";
import path from "path";

const ignoreKnownWarnings: WarningHandler = function ignoreKnownWarnings(warning): void {
  if (typeof warning === "string") return;

  if (warning.code === "THIS_IS_UNDEFINED") {
    // This error happens frequently due to TypeScript emitting `this` at the
    // top-level of a module. In this case its fine if it gets rewritten to
    // undefined, so ignore this error.
    return;
  }

  if (
    warning.code === "CIRCULAR_DEPENDENCY" &&
    warning.importer &&
    warning.importer.indexOf(path.normalize("node_modules/chai/lib"))
  ) {
    // Chai contains circular references, but they are not fatal and can be ignored.
    return;
  }

  console.error(`(!) ${warning.message}`);
};

export default ignoreKnownWarnings;
