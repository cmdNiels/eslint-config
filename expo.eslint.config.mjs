import { defineConfig } from "eslint/config";
import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";

/**
 * Expo/React Native ESLint configuration with NativeWind support
 * These rules focus on React Native best practices and mobile development patterns
 * Should be used in combination with ts.eslint.config.mjs
 */
export default defineConfig([
	{
		name: "@cmdniels/eslint-config-expo",
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
		ignores: [
			"node_modules/**",
			".expo/**",
			"android/**",
			"ios/**",
			"web-build/**",
			"expo-env.d.ts",
			"nativewind-env.d.ts",
			"metro.config.js",
			"babel.config.js",
			"app.config.js",
			"postcss.config.mjs",
		],
		plugins: {
			react: reactPlugin,
			"react-native": reactNativePlugin,
			"jsx-a11y": jsxA11yPlugin,
			"better-tailwindcss": tailwindPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				__DEV__: "readonly",
				FormData: "readonly",
				XMLHttpRequest: "readonly",
				fetch: "readonly",
				navigator: "readonly",
				window: "readonly",
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

			// React Native rules
			...reactNativePlugin.configs.all.rules,

			// JSX Accessibility rules
			...jsxA11yPlugin.configs.recommended.rules,

			// React overrides
			"react/style-prop-object": "off",
			"react/react-in-jsx-scope": "off",
			"react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
			"react/jsx-no-constructed-context-values": "off",
			"react/function-component-definition": "off",
			"react/destructuring-assignment": "off",
			"react/require-default-props": "off",
			"react/jsx-props-no-spreading": "off",
			"react/no-unstable-nested-components": "off",
			"react/prop-types": "off",

			// React Native overrides
			"react-native/no-unused-styles": "error",
			"react-native/no-inline-styles": "warn",
			"react-native/no-color-literals": "warn",
			"react-native/no-raw-text": "off",
			"react-native/no-single-element-style-arrays": "error",

			// JSX Accessibility overrides
			"jsx-a11y/click-events-have-key-events": "off",
			"jsx-a11y/no-static-element-interactions": "off",
			"jsx-a11y/no-noninteractive-element-interactions": "off",
			"jsx-a11y/heading-has-content": "off",

			// NativeWind/Tailwind CSS rules
			"better-tailwindcss/enforce-consistent-line-wrapping": "off", // Handled by Prettier
			"better-tailwindcss/enforce-consistent-class-order": "warn",
			"better-tailwindcss/enforce-consistent-variable-syntax": "warn",
			"better-tailwindcss/enforce-consistent-important-position": "warn",
			"better-tailwindcss/enforce-shorthand-classes": "warn",
			"better-tailwindcss/no-duplicate-classes": "warn",
			"better-tailwindcss/no-deprecated-classes": "warn",
			"better-tailwindcss/no-unnecessary-whitespace": "off", // Handled by Prettier
			"better-tailwindcss/no-unregistered-classes": [
				"error",
				{
					ignore: ["^(web|ios|android|native):"],
				},
			],
			"better-tailwindcss/no-conflicting-classes": "error",
			"better-tailwindcss/no-restricted-classes": "error",
		},
	},
]);
