import { IPluginDefinition } from "./types";
import { generatePluginMap } from "./util";

export const plugins: IPluginDefinition[] = [
];

export const pluginMap: Map<string, IPluginDefinition> = /*#__PURE__*/ generatePluginMap(plugins);

if (plugins.length !== pluginMap.size) {
    console.warn("Non-unique plugin ID in plugin directory");
}

export default plugins;
