import importAliasPlugin from "@dword-design/eslint-plugin-import-alias";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

// Extract the actual plugin with rules from the recommended config
const importAlias = importAliasPlugin.configs.recommended.plugins["@dword-design/import-alias"];

/**
 * TypeScript logic and code quality rules
 * Combines correctness, type safety, and best practices
 * Use Prettier separately for formatting
 */
export default defineConfig([
	{
		name: "@cmdniels/eslint-config-ts",
		ignores: [
			".git/**",
			"node_modules/**",
			"build/**",
			"dist/**",
			"out/**",
			"coverage/**",
			".prettierrc.mjs",
			"*.log",
			".env*",
			"*.env.*",
			"*.tsbuildinfo",
			"**/*.generated.*",
			"**/generated/**",
		],
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
		plugins: {
			"@typescript-eslint": typescriptEslint,
			"unused-imports": unusedImports,
			"@dword-design/import-alias": importAlias,
			import: importPlugin,
		},
		languageOptions: {
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		settings: {
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: "./tsconfig.json",
				},
			},
		},
		rules: {
			// ES6+ formatting
			"arrow-body-style": ["error", "as-needed"],
			"arrow-spacing": "error",
			"generator-star-spacing": "error",
			"no-confusing-arrow": "off",
			"rest-spread-spacing": "error",
			"template-curly-spacing": "error",
			"yield-star-spacing": "error",

			// Quote style
			quotes: [
				"error",
				"double",
				{
					avoidEscape: true,
					allowTemplateLiterals: false,
				},
			],

			// Variables and declarations
			"no-var": "error",
			"prefer-const": "error",
			"no-unused-expressions": "error",
			"no-undef": "off", // TypeScript handles this
			"no-duplicate-imports": "off", // import/no-duplicates handles this better
			"no-useless-constructor": "error",
			"no-useless-return": "error",

			// Error prevention
			"no-unreachable": "error",
			"no-empty": "error",
			"no-func-assign": "error",
			"no-implied-eval": "error",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "error",
			"no-obj-calls": "error",
			"no-sparse-arrays": "error",
			"use-isnan": "error",
			"valid-typeof": "error",

			// Best practices
			curly: ["error", "all"],
			"dot-notation": "error",
			eqeqeq: ["error", "always"],
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-fallthrough": "error",
			"no-implicit-coercion": "error",
			"no-implicit-globals": "error",
			"no-loop-func": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-octal": "error",
			"no-redeclare": "error",
			"no-return-assign": "error",
			"no-script-url": "error",
			"no-self-assign": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-throw-literal": "error",
			"no-unmodified-loop-condition": "error",
			"no-unused-labels": "error",
			"no-useless-call": "error",
			"no-useless-concat": "error",
			"no-void": "error",
			"no-with": "error",
			radix: "error",
			"vars-on-top": "error",
			"wrap-iife": ["error", "any"],
			yoda: "error",

			// Strict mode
			strict: ["error", "never"],

			// ES6+ features
			"constructor-super": "error",
			"no-class-assign": "error",
			"no-const-assign": "error",
			"no-dupe-class-members": "error",
			"no-new-symbol": "error",
			"no-this-before-super": "error",
			"no-useless-computed-key": "error",
			"no-useless-rename": "error",
			"object-shorthand": "error",
			"prefer-arrow-callback": "error",
			"prefer-destructuring": ["error", { object: true, array: false }],
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "error",
			"symbol-description": "error",

			// Logic-based preferences
			"consistent-return": "off", // TypeScript handles this better
			"no-empty-pattern": "off",
			"no-nested-ternary": "off",
			"no-use-before-define": "off", // TypeScript handles this
			"no-continue": "off",
			"no-param-reassign": "off",

			// Console and debugging
			"no-console": "warn",
			"no-debugger": "error",
			"no-alert": "error",

			// Restricted syntax patterns
			"no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],

			// TypeScript specific logic rules
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
					fixStyle: "inline-type-imports",
					disallowTypeAnnotations: false,
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-non-null-assertion": "warn",
			"@typescript-eslint/prefer-nullish-coalescing": "error",
			"@typescript-eslint/prefer-optional-chain": "error",
			"@typescript-eslint/no-unnecessary-type-assertion": "error",
			"@typescript-eslint/ban-ts-comment": [
				"error",
				{
					"ts-expect-error": "allow-with-description",
					"ts-ignore": "allow-with-description",
					"ts-nocheck": false,
					"ts-check": false,
				},
			],

			// Replace base rules with TypeScript versions
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],

			"no-shadow": "off",
			"@typescript-eslint/no-shadow": "error",

			// Import alias preference
			"@dword-design/import-alias/prefer-alias": [
				"error",
				{
					alias: {
						"@": ".",
					},
				},
			],

			// Import organization
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
					pathGroups: [
						{
							pattern: "@/**",
							group: "internal",
							position: "after",
						},
					],
					pathGroupsExcludedImportTypes: [],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
					distinctGroup: false,
				},
			],
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": [
				"error",
				{
					"prefer-inline": true,
				},
			],
		},
	},
	prettierConfig,
]);
