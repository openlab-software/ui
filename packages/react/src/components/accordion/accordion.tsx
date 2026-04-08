import { Accordion as AccordionBase } from "@base-ui/react/accordion";
import * as styles from "@openlab-ui/core/accordion/accordion.css";
import { ChevronDownIcon } from "lucide-react";

export type { AccordionBase as AccordionPrimitive };

export function Accordion(props: AccordionBase.Root.Props) {
  return (
    <AccordionBase.Root
      data-slot="accordion"
      className={styles.root}
      {...props}
    />
  );
}

export function AccordionItem(props: AccordionBase.Item.Props) {
  return (
    <AccordionBase.Item
      data-slot="accordion-item"
      className={styles.item}
      {...props}
    />
  );
}

export function AccordionTrigger({
  children,
  ...props
}: AccordionBase.Trigger.Props) {
  return (
    <AccordionBase.Header className={styles.header}>
      <AccordionBase.Trigger
        data-slot="accordion-trigger"
        className={styles.trigger}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          style={{
            pointerEvents: "none",
            flexShrink: 0,
            width: "1rem",
            height: "1rem",
          }}
        />
      </AccordionBase.Trigger>
    </AccordionBase.Header>
  );
}

export function AccordionContent({
  children,
  ...props
}: AccordionBase.Panel.Props) {
  return (
    <AccordionBase.Panel
      data-slot="accordion-content"
      className={styles.panel}
      {...props}
    >
      <div className={styles.panelContent}>{children}</div>
    </AccordionBase.Panel>
  );
}
