import { dataVisualizerPlugin } from "./plugins/dataVisualizer";
import { eStepperPlugin } from "./plugins/eStepper";
import { stepperPlugin } from "./plugins/stepper";
import type { IPluginDefinition } from "./types";
import { generatePluginMap } from "./util";

export const plugins: IPluginDefinition[] = [
    stepperPlugin,
    dataVisualizerPlugin,
    eStepperPlugin,
];

export const pluginMap: Map<string, IPluginDefinition> = /*#__PURE__*/ generatePluginMap(plugins);

if (plugins.length !== pluginMap.size) {
    console.warn("Non-unique plugin ID in plugin directory");
}

export default plugins;
