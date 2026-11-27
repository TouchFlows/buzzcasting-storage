import antfu from "@antfu/eslint-config";

export default antfu(
	{
		typescript: true,
		// JSON in this repo (tsconfig, package.json, typedoc.json) is 2-space
		// indented and keyed by hand; the jsonc preset would rewrite all of it.
		jsonc: false,
		// Markdown is handled by markdownlint (.markdownlint.json). The eslint
		// markdown preset lints the fenced code samples as real code, and
		// `pnpm lint` (which passes --fix) then rewrites them.
		markdown: false,
		// The CI workflows are hand-maintained; the yaml preset's key sorting
		// (and pnpm/yaml-enforce-settings) would rewrite them on every fix run.
		yaml: false,
		// `docs` is typedoc output, regenerated on every `pnpm docs` run.
		ignores: [
			"dist",
			"node_modules",
			"docs",
		],
		// Match the style the codebase is actually written in: tabs, double
		// quotes and semicolons. Without this the preset defaults to
		// 2-space/singlequote/no-semi and reports thousands of style errors.
		stylistic: {
			indent: "tab",
			quotes: "double",
			semi: true,
		},
		rules: {
			"no-console": 0,
			"style/brace-style": ["error", "1tbs"],
			"style/arrow-parens": ["error", "always"],
			"curly": ["error", "all"],
			"antfu/consistent-list-newline": "off",
			// This rule re-wraps compact ternaries used as object values onto
			// several lines, which moves a `@ts-ignore`/`@ts-expect-error` off
			// the line that actually errors and breaks `tsc`. Keep the
			// existing single-line style.
			"antfu/reasonable-newline": "off",
		},
		languageOptions: {
			parserOptions: {
				warnOnUnsupportedTypeScriptVersion: false,
			},
		},
	},
	{
		// The four non-Dexie backends deliberately stub out the full client
		// surface; their parameters exist only so the signatures stay
		// comparable with DexieClient, which is why they are never read.
		files: ["src/storage/{keyval,local-storage,session-storage,window}.ts"],
		rules: {
			"unused-imports/no-unused-vars": ["error", { args: "none" }],
		},
	},
);
