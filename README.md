# Source Academy Plugin Directory

This repository acts as a directory for Conductor plugins officially supported
by Source Academy.

## Using this directory

### As a static asset

You may import the `plugins` array directly after installing this repository
(as `import { plugins } from 'plugin-directory'`). This will cause the array
to be bundled together at build time.

Caution: when including this repository as a dependency in your `package.json`,
**be sure to specify a specific commit hash or tag**.
Failure to do this may cause problems with CI/CD due to lockfile issues when this
directory is updated.

### Retrieved dynamically

The `plugins` array is available dynamically at
[`https://source-academy.github.io/plugin-directory/directory.json`](https://source-academy.github.io/plugin-directory/directory.json).

In this case, you probably do not want to bundle the array at build time. You may
bundle only the utility functions by importing from `'plugin-directory/dist/util'` instead.

You can reconstruct the `pluginMap` using the `generatePluginMap` utility function.

## Plugin definitions

Plugin definitions should follow the `IPluginDefinition` interface.

Plugins consist of an ID, a name, an optional description, and a record mapping
execution environment to a URL to the plugin's entrypoint file.

To add a new plugin to the plugins directory, define your plugin according to
the interface, and add the definition to the `plugins` array in `src/plugins.ts`.

For plugins meant to use Conductor's Module API, create an entry for
`PluginType.MODULE`, and do not create one for `PluginType.RUNNER`.

For plugins meant to use the Source Academy Frontend's API, create an entry for
`PluginType.WEB`.

## Local testing

You may test any changes (e.g. adding your new language) locally by running `yarn start`.
This starts a development server and compiles the directory in watch mode (recompiling on any changes).

The directory will be available at [`http://localhost:8126/directory.json`](http://localhost:8126/directory.json).
On the Source Academy frontend, set the feature flag `plugindir.url` to point to this location.
