import { resolve } from "node:path";
import camelCase from "camelcase";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import packageJson from "./package.json" with { type: "json" };

const packageName = packageJson.name.split("/").pop() || packageJson.name;

/**
 * Runtime dependencies stay imports in the output instead of being inlined.
 *
 * Bundling them used to put a private copy of Dexie (and of the rest) inside
 * `dist/`. Dexie refuses to coexist with a different version of itself - it
 * throws "Two different versions of Dexie loaded in the same app" at import
 * time - so the moment a consumer (or anything else in their graph) imports
 * `dexie` directly, the bundled copy collides with it. Keeping them external
 * also means one copy of every dependency: the one the consumer resolves.
 */
const externalDependencies = [
	...Object.keys(packageJson.dependencies ?? {}),
	...Object.keys(packageJson.peerDependencies ?? {}),
];

/** `dexie` and `dexie/live-query` both have to remain imports. */
const external = [
	...externalDependencies,
	...externalDependencies.map(
		(name) => new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/`),
	),
];

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
		rollupOptions: {
			external,
		},
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
