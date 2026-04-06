import { Collapsible as CollapsibleBase } from "@base-ui/react/collapsible";
import * as styles from "@patrick-ui/core/collapsible/collapsible.css";

export type CollapsibleRootProps = CollapsibleBase.Root.Props;
export type CollapsibleTriggerProps = CollapsibleBase.Trigger.Props;
export type CollapsiblePanelProps = CollapsibleBase.Panel.Props;

export function CollapsibleRoot(props: CollapsibleRootProps) {
  return <CollapsibleBase.Root className={styles.root} {...props} />;
}
CollapsibleRoot.displayName = "PatrickUICollapsibleRoot";

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  return <CollapsibleBase.Trigger className={styles.trigger} {...props} />;
}
CollapsibleTrigger.displayName = "PatrickUICollapsibleTrigger";

export function CollapsiblePanel(props: CollapsiblePanelProps) {
  return <CollapsibleBase.Panel className={styles.panel} {...props} />;
}
CollapsiblePanel.displayName = "PatrickUICollapsiblePanel";

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
};
