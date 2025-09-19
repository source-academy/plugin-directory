import { IPluginDefinition } from "./types";

export function generatePluginMap(plugins: IPluginDefinition[]): Map<string, IPluginDefinition> {
    return new Map(plugins.map(plugin => [plugin.id, plugin]));
}

/**
 * Retrieve by ID a definition for a plugin from the directory.
 * @param pluginMap The plugin map of the directory.
 * @param pluginId The ID of the plugin to get the definition of.
 * @returns The retrieved plugin definition, or undefined if not found.
 */
export function getPluginDefinition(pluginMap: Map<string, IPluginDefinition>, pluginId: string) {
    return pluginMap.get(pluginId);
}
