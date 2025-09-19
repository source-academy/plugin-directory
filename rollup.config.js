import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    plugins: [typescript()],
    input: ["src/index.ts", "src/plugins.ts", "src/util.ts"],
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
};
