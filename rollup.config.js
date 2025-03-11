import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [{
    plugins: [nodeResolve(), typescript()],
    input: "src/index.ts",
    output: {
        plugins: [terser({
            module: true,
            ecma: 2015,
            format: {
                preserve_annotations: true
            }
        })],
        dir: "dist",
        format: "es",
        sourcemap: true,
    }
}];
