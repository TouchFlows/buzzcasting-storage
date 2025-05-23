/// <reference types="vitest" />
import { resolve } from 'node:path'
import camelCase from 'camelcase'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

const packageName = packageJson.name.split('/').pop() || packageJson.name

export default defineConfig({

  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: `${camelCase(packageName, { pascalCase: true })}`,
      fileName: (format) => {
        let name: string = ''
        switch (format) {
          case 'es':
            name = `${packageName}.esm.js`
            break
        }
        return name
      },
    },
    // minify: "esbuild",
  },
  plugins: [dts({ rollupTypes: true })],
  test: {},
})
