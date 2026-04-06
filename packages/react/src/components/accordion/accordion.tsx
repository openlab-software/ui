import { Accordion as AccordionBase } from "@base-ui/react/accordion";
import * as styles from "@patrick-ui/core/accordion/accordion.css";

export type AccordionRootProps = AccordionBase.Root.Props;
export type AccordionItemProps = AccordionBase.Item.Props;
export type AccordionHeaderProps = AccordionBase.Header.Props;
export type AccordionTriggerProps = AccordionBase.Trigger.Props;
export type AccordionPanelProps = AccordionBase.Panel.Props;

export function AccordionRoot(props: AccordionRootProps) {
  return <AccordionBase.Root className={styles.root} {...props} />;
}
AccordionRoot.displayName = "PatrickUIAccordionRoot";

export function AccordionItem(props: AccordionItemProps) {
  return <AccordionBase.Item className={styles.item} {...props} />;
}
AccordionItem.displayName = "PatrickUIAccordionItem";

export function AccordionHeader(props: AccordionHeaderProps) {
  return <AccordionBase.Header className={styles.header} {...props} />;
}
AccordionHeader.displayName = "PatrickUIAccordionHeader";

export function AccordionTrigger(props: AccordionTriggerProps) {
  return <AccordionBase.Trigger className={styles.trigger} {...props} />;
}
AccordionTrigger.displayName = "PatrickUIAccordionTrigger";

export function AccordionPanel(props: AccordionPanelProps) {
  return <AccordionBase.Panel className={styles.panel} {...props} />;
}
AccordionPanel.displayName = "PatrickUIAccordionPanel";

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
};
