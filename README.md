# Source Academy Plugin Directory

This repository acts as a directory for Conductor plugins officially supported
by Source Academy.

## Plugin definitions

Plugin definitions should follow the `IPluginDefinition` interface.

Plugins consist of a name, an optional description, and a record mapping
execution environment to a URL to the plugin's entrypoint file.

## Adding a new Plugin

To add a new plugin to the plugins directory, define your plugin according to
the interface, and add the definition to the `plugins` array in `src/index.ts`.

Please export your plugin definitions `as const`.

For plugins meant to use Conductor's Module API, create an entry for
`PluginType.MODULE`, and do not create one for `PluginType.RUNNER`.

For plugins meant to use the Source Academy Frontend's API, create an entry for
`PluginType.WEB`.
