# BuzzCasting Storage

This is a wrapper class to use multiple storage options with BuzzCasting.

Currently supported are: Local Storage, Session Storage, IDB Keyval, Dexie, Window object

## Features

- ✨ Fully customized [eslint](https://eslint.org/) configuration based on the config by [Antfu](https://github.com/antfu/eslint-config)
- 🧪 Write tests quickly and conveniently with [vitest](https://vitest.dev/)
- 🤝 Supports [conventional commits](https://www.conventionalcommits.org/)
- 💅 Generate beautiful changelogs with [changelogen](https://github.com/unjs/changelogen)
- ♾️ GitHub CI for your build
- 🤖 Ready configuration for [renovatebot](https://github.com/apps/renovate) with [renovate-config](https://github.com/hywax/renovate-config)
- 🚀 Library releases with just one command

## Get started

Example call:
```js
import BuzzcastingStorageManager, { IQuery, IStorageManager } from 'buzzcasting-storage'

const options: IStorageManager = {
  app: 'my-subdomain',
  version: 'v4',
  token: 'meta',
  bearer: 'bearer_token',
  storage: 'dexie',
  moderation: 'none',
  beforeTime: null,
  delay: 0,
  period: 0,
};

let storageManager = new BuzzcastingStorageManager(options)

const query: IQuery = {
  type: 'messages',
  dashboard: 'dashboard_id',
  widget: 'widget_id'
}

const data = storageManager.getMessages(query)
```

This will initiate a call to the buzzcasting backoffice to retrieve results

### GitHub Template

This is a template repo. Click the green [Use this template](https://github.com/hywax/vite-vanilla-library-template/generate) button to get started.

### Git Clone

```shell
git clone https://github.com/TouchFlows/buzzcasting-storage.git
cd buzzcasting-storage
pnpm install
```

## Usage

The project contains the following scripts:

- `dev` - Start the development server
- `build` - Build for production
- `release` - Generate changelog and npm publish
- `lint` - Checks your code for any linting errors
- `test` - Run all tests
- `test:watch` - Run all tests with watch mode
- `test:coverage` - Run all tests with code coverage report
- `prepare` - Script for setting up husky hooks

## License

This template was created under the [MIT License](LICENSE).
