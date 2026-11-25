/**
 * The side-content tab that a web plugin contributes, as far as it is known before the plugin is
 * loaded. A host can show a placeholder tab, and know how the tab behaves, without naming the
 * plugin: it reads this from the directory.
 *
 * The plugin registers the tab itself when it loads (`ITabService.registerTab` of
 * `@sourceacademy/common-tabs`), and what it registers should agree with this.
 */
export interface IPluginTab {
    /** The id of the tab, as the plugin registers it. */
    readonly id: string;

    /** The label on the tab. */
    readonly label: string;

    /** The name of the tab's Blueprint icon. */
    readonly iconName: string;

    /** Whether the host hides its REPL while the tab is selected. Default: `false`. */
    readonly hidesRepl?: boolean;

    /** Whether the user can resize the side content while the tab is selected. Default: `true`. */
    readonly resizable?: boolean;
}
