import type { PluginType } from "./PluginType";

export interface IPluginDefinition {
    /** The plugin's identifier. */
    readonly id: string;

    /** The name of the plugin. */
    readonly name: string;

    /** An optional description of the plugin. */
    readonly description?: string;

    /** The paths to the plugin's script file, by target. */
    readonly resolutions: Partial<Record<PluginType, string>>;
}
