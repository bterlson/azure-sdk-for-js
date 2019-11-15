import multientry from "rollup-plugin-multi-entry";

export default function () {
    return multientry({ exports: false });
}