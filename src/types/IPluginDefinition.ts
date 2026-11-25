import type { IPluginTab } from "./IPluginTab";
import type { PluginType } from "./PluginType";

export interface IPluginDefinition {
    /** The plugin's identifier. */
    readonly id: string;

    /** The name of the plugin. */
    readonly name: string;

    /** An optional description of the plugin. */
    readonly description?: string;

    /**
     * The side-content tab that the plugin contributes, if it contributes one. Lets a host show a
     * placeholder for the tab, and know how it behaves, before the plugin is loaded.
     */
    readonly tab?: IPluginTab;

    /** The paths to the plugin's script file, by target. */
    readonly resolutions: Partial<Record<PluginType, string>>;
}
