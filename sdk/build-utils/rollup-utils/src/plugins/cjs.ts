import cjs from "rollup-plugin-commonjs";

const KNOWN_NAMED_EXPORTS = {
  assert: [
    "deepEqual",
    "deepStrictEqual",
    "doesNotThrow",
    "equal",
    "fail",
    "notDeepEqual",
    "notDeepStrictEqual",
    "notEqual",
    "notStrictEqual",
    "ok",
    "strictEqual",
    "throws"
  ],
  events: ["EventEmitter"]
};

export default function() {
  return cjs({
    namedExports: KNOWN_NAMED_EXPORTS
  });
}
