import { type IPluginDefinition, PluginType } from "../types";

/**
 * The environment stepper ("e-stepper") host plugin.
 *
 * Only a WEB resolution is provided: the runner half is bundled into each language's evaluator (it
 * extends `@sourceacademy/runner-e-stepper`), and the evaluator pulls in this web half by calling
 * `hostLoadPlugin("e-stepper")`. The id must match `E_STEPPER_DIRECTORY_ID` from
 * `@sourceacademy/common-e-stepper`.
 */
export const eStepperPlugin: IPluginDefinition = {
    id: "e-stepper",
    name: "E-Stepper",
    description:
        "Visualises the step-by-step evaluation of a program in the environment model: the program with its environment frames and heap.",
    resolutions: {
        [PluginType.WEB]: "https://source-academy.github.io/plugins/web/e-stepper/index.mjs",
    },
};
