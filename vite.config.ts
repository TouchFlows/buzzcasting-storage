import { resolve } from "node:path";
import camelCase from "camelcase";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import packageJson from "./package.json" with { type: "json" };

const packageName = packageJson.name.split("/").pop() || packageJson.name;

export default defineConfig({
	build: {
		target: "esnext",
		lib: {
			entry: resolve(import.meta.dirname, "src/index.ts"),
			formats: ["es"],
			name: `${camelCase(packageName, { pascalCase: true })}`,
			fileName: (format) => {
				let name: string = "";
				switch (format) {
					case "es":
						name = `${packageName}.esm.js`;
						break;
				}
				return name;
			},
		},
		// minify: "esbuild",
	},
	plugins: [
		// `rollupTypes` was renamed to `bundleTypes` in vite-plugin-dts 5, and
		// bundling additionally requires @microsoft/api-extractor. Without the
		// rename the option is silently ignored and the .d.ts entry file that
		// package.json's `types` field points at is never written; insertTypesEntry
		// keeps that entry (and therefore the published contract) in place.
		dts({ insertTypesEntry: true }),
	],
	test: {
		include: ["test/**/*.test.ts"],
		environment: "node",
		coverage: {
			provider: "v8",
			include: ["src/**/*.ts"],
			reporter: ["text", "lcov"],
		},
	},
});
