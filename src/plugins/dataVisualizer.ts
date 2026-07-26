import { type IPluginDefinition, PluginType } from "../types";

/**
 * The Data Visualizer host plugin.
 *
 * Only a WEB resolution is provided: the runner half is bundled into each language's evaluator (it
 * extends `@sourceacademy/runner-data-visualizer`), and the evaluator pulls in this web half by
 * calling `hostLoadPlugin("data-visualizer")`. The id must match `DATA_VISUALIZER_DIRECTORY_ID`
 * from `@sourceacademy/common-data-visualizer`.
 */
export const dataVisualizerPlugin: IPluginDefinition = {
    id: "data-visualizer",
    name: "Data Visualizer",
    description: "Visualises pairs, lists and trees drawn with draw_data as box-and-pointer diagrams.",
    resolutions: {
        [PluginType.WEB]: "https://source-academy.github.io/plugins/web/data-visualizer/index.mjs",
    },
};
