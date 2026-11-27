import { type IPluginDefinition, PluginType } from "../types";

/**
 * The CSE machine host plugin: the control, the stash and the environment diagram at each step of a
 * program.
 *
 * Only a WEB resolution is provided: the runner half is bundled into each language's evaluator (it
 * extends `@sourceacademy/runner-cse-machine`), and the evaluator pulls in this web half by calling
 * `hostLoadPlugin("cse-machine")`. The id must match `CSE_DIRECTORY_ID` from
 * `@sourceacademy/common-cse-machine`. Like the Stepper, the tab hides the REPL and keeps the side
 * content at the width it is given.
 */
export const cseMachinePlugin: IPluginDefinition = {
    id: "cse-machine",
    name: "CSE Machine",
    description:
        "Visualises the control, the stash and the environment model of a program at each step of its evaluation.",
    tab: {
        id: "cse-machine",
        label: "CSE Machine",
        iconName: "globe",
        hidesRepl: true,
        resizable: false,
    },
    resolutions: {
        [PluginType.WEB]: "https://source-academy.github.io/plugins/web/cse-machine/index.mjs",
    },
};
