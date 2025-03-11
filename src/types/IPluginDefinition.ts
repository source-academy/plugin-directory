import type { PluginType } from "./PluginType";

export interface IPluginDefinition {
    name: string;
    description?: string;
    resolutions: Partial<Record<PluginType, string>>;
}
