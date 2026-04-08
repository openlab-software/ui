import { Collapsible as CollapsibleBase } from "@base-ui/react/collapsible";
import * as styles from "@openlab-ui/core/collapsible/collapsible.css";

export type CollapsibleRootProps = CollapsibleBase.Root.Props;
export type CollapsibleTriggerProps = CollapsibleBase.Trigger.Props;
export type CollapsiblePanelProps = CollapsibleBase.Panel.Props;

export function CollapsibleRoot(props: CollapsibleRootProps) {
  return <CollapsibleBase.Root className={styles.root} {...props} />;
}
CollapsibleRoot.displayName = "OpenLabUICollapsibleRoot";

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  return <CollapsibleBase.Trigger className={styles.trigger} {...props} />;
}
CollapsibleTrigger.displayName = "OpenLabUICollapsibleTrigger";

export function CollapsiblePanel(props: CollapsiblePanelProps) {
  return <CollapsibleBase.Panel className={styles.panel} {...props} />;
}
CollapsiblePanel.displayName = "OpenLabUICollapsiblePanel";

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
};
