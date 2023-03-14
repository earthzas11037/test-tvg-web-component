import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import styled from 'styled-components';

const styledComponentsTransformer = createStyledComponentsTransformer({
  displayName: true,
});

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: 'react-lib'
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts(),
      typescript({
        transformers: [
            () => ({
                before: [styledComponentsTransformer],
            }),
        ],
    }),
    ],
    external: [/\.css$/, 'styled-components'],
  },
];