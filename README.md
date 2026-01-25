# @cmdniels/eslint-config

Opinionated ESLint configurations for TypeScript and web (React/Next.js/Tailwind) projects with opinionated code quality, best practices, and formatting rules.

## Installation

Install the package and its peer dependencies:

```bash
# npm
npm install -D @cmdniels/eslint-config eslint prettier typescript

# bun
bun install --dev @cmdniels/eslint-config eslint prettier typescript
```

## Usage

### TypeScript Only

For TypeScript projects (backend, libraries, etc.):

```js
// eslint.config.mjs
import { defineConfig } from "eslint/config";

import tsConfig from "@cmdniels/eslint-config/ts";

export default defineConfig([
	tsConfig,
	{
		ignores: ["node_modules/**"],
	},
]);
```

### Web Projects (React/Next.js/Tailwind)

For web projects, combine both configs:

```js
// eslint.config.mjs
import { defineConfig } from "eslint/config";

import tsConfig from "@cmdniels/eslint-config/ts";
import webConfig from "@cmdniels/eslint-config/web";

export default defineConfig([
	tsConfig,
	webConfig,
	{
		ignores: ["node_modules/**", ".next/**"],
	},
]);
```

### Extending the Configuration

You can extend or override rules:

```js
// eslint.config.mjs
import { defineConfig } from "eslint/config";

import tsConfig from "@cmdniels/eslint-config/ts";
import webConfig from "@cmdniels/eslint-config/web";

export default defineConfig([
	tsConfig,
	webConfig,
	{
		ignores: ["node_modules/**", ".next/**"],
		rules: {
			// Your custom rules
			"no-console": "off",
		},
	},
]);
```

### TypeScript Configuration

Make sure you have a `tsconfig.json` in your project root. The ESLint config expects it to be there for type-aware linting.

**Important:** This config enforces `@` import aliases. You must configure path mapping in your `tsconfig.json`:

```json
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@/*": ["./*"]
		}
		// ... other options
	}
}
```

This allows you to import modules like `import { foo } from "@/lib/utils"` instead of relative paths like `"../../lib/utils"`.

### Prettier Configuration

This package includes a shareable Prettier config. Import it in your `prettier.config.mjs`:

```js
// .prettierrc.mjs
export { default } from "@cmdniels/eslint-config/prettier";
```

## Scripts

Add these scripts to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint --fix .",
		"format": "prettier --write . --log-level warn --cache --cache-location node_modules/.cache/prettier/.prettier-cache",
		"format:check": "prettier --check . --log-level warn --cache --cache-location node_modules/.cache/prettier/.prettier-cache",
		"fix": "bun lint:fix && bun format"
	}
}
```

**Recommended workflow:**

- `bun fix` - Fix all linting and formatting issues in one command

## Ignored Files

The following files and directories are automatically ignored:

- `.*/**` (hidden directories)
- `node_modules/**`
- `build/**`, `dist/**`, `out/**`
- `coverage/**`
- `*.log`, `.env*`, `*.env.*`
- `*.tsbuildinfo`
- `**/*.generated.*`, `**/generated/**`
- `*.config.*` (all config files like `vite.config.ts`, `prettier.config.mjs`)
- `.prettierrc.*` (prettier config files)

Config files are ignored because they often aren't included in `tsconfig.json` and would cause TypeScript parser errors.

## OpenCode Integration

This package includes custom coding rules for [OpenCode](https://opencode.ai). The rules are automatically applied when OpenCode detects the `opencode.jsonc` configuration file:

```jsonc
{
	"$schema": "https://opencode.ai/config.json",
	"instructions": [
		"https://raw.githubusercontent.com/cmdNiels/eslint-config/main/rules/default.md",
		"https://raw.githubusercontent.com/cmdNiels/eslint-config/main/rules/ts.md",
		"https://raw.githubusercontent.com/cmdNiels/eslint-config/main/rules/web.md",
		"https://raw.githubusercontent.com/cmdNiels/eslint-config/main/rules/expo.md",
	],
}
```

## License

MIT
