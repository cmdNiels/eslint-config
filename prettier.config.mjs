// @ts-check
import { fileURLToPath } from "node:url";

/** @type {import("prettier").Config} */
export default {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	singleQuote: false,
	bracketSpacing: true,
	bracketSameLine: false,
	endOfLine: "auto",
	semi: true,
	trailingComma: "es5",
	plugins: [fileURLToPath(import.meta.resolve("prettier-plugin-packagejson"))],
};
