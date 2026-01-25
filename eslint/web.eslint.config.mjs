import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/**
 * Web-specific ESLint configuration for React, Next.js, and Tailwind CSS
 * These rules focus on web framework best practices and patterns
 */
export default defineConfig([
	{
		name: "@cmdniels/eslint-config-web",
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
		ignores: [".next/**", "next-env.d.ts", "babel.config.js", "tailwind.config.js", "convex/_generated/**"],
		plugins: {
			"@next/next": nextPlugin,
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"better-tailwindcss": tailwindPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: "detect",
			},
			"better-tailwindcss": {
				entryPoint: "globals.css",
			},
		},
		rules: {
			// React rules
			...reactPlugin.configs.recommended.rules,

			// Next.js rules
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs["core-web-vitals"].rules,

			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"@next/next/no-html-link-for-pages": "off",

			// React Hooks rules
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",

			// Better Tailwind CSS rules
			"better-tailwindcss/enforce-consistent-line-wrapping": "off", // Handled by Prettier
			"better-tailwindcss/enforce-consistent-class-order": "warn",
			"better-tailwindcss/enforce-consistent-variable-syntax": "warn",
			"better-tailwindcss/enforce-consistent-important-position": "warn",
			"better-tailwindcss/enforce-shorthand-classes": "warn",
			"better-tailwindcss/no-duplicate-classes": "warn",
			"better-tailwindcss/no-deprecated-classes": "warn",
			"better-tailwindcss/no-unnecessary-whitespace": "off", // Handled by Prettier
			"better-tailwindcss/no-unregistered-classes": "error",
			"better-tailwindcss/no-conflicting-classes": "error",
			"better-tailwindcss/no-restricted-classes": "error",
		},
	},
]);
