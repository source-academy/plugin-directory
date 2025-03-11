import { soundsPlugin } from "./plugins/sounds";
import type { IPluginDefinition } from "./types/IPluginDefinition";

function toRecord<const P extends IPluginDefinition[]>(plugins: P) {
    const pluginRecord: Record<P[number]["name"], IPluginDefinition> = {} as any; // to be populated
    for (const plugin of plugins) {
        // @ts-expect-error
        pluginRecord[plugin.name] = plugin;
    }
    return pluginRecord;
}

export const plugins = /*#__PURE__*/ toRecord([
    soundsPlugin
]);

export { PluginType } from "./types";
