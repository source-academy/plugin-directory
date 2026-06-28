import { type IPluginDefinition, PluginType } from "../types";

/**
 * The Stepper (substitution visualizer) host plugin.
 *
 * Only a WEB resolution is provided: the runner half is bundled into each language's evaluator (it
 * extends `@sourceacademy/runner-stepper`), and the evaluator pulls in this web half by calling
 * `hostLoadPlugin("stepper")`. The id must match `STEPPER_DIRECTORY_ID` from
 * `@sourceacademy/common-stepper`.
 */
export const stepperPlugin: IPluginDefinition = {
    id: "stepper",
    name: "Stepper",
    description: "Visualises the step-by-step substitution evaluation of a program.",
    resolutions: {
        [PluginType.WEB]: "https://source-academy.github.io/plugins/web/stepper/index.mjs",
    },
};
