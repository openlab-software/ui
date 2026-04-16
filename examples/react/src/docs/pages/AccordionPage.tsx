import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function AccordionPage() {
  return (
    <Page
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal or hide associated content."
    >
      <Section
        title="Single"
        column
        preview={
          <Accordion style={{ width: "100%", maxWidth: 480 }}>
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">What is OpenLab UI?</AccordionTrigger>
              <AccordionContent>
                OpenLab UI is a component library built on top of Base UI with vanilla-extract styling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">How do I install it?</AccordionTrigger>
              <AccordionContent>
                Run <code>pnpm add @openlab-ui/react</code> and import the styles from{" "}
                <code>@openlab-ui/react/styles.css</code>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">Is dark mode supported?</AccordionTrigger>
              <AccordionContent>
                Yes. Apply the <code>darkTheme</code> class to the <code>OpenLabUIProvider</code> to enable dark mode.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        }
        code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@openlab-ui/react";

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger value="item-1">What is OpenLab UI?</AccordionTrigger>
    <AccordionContent>
      OpenLab UI is a component library built on top of Base UI.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger value="item-2">How do I install it?</AccordionTrigger>
    <AccordionContent>
      Run pnpm add @openlab-ui/react
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      />

      <Section
        title="Multiple Open"
        description="Allow multiple panels to be expanded simultaneously."
        column
        preview={
          <Accordion multiple defaultValue={["faq-1", "faq-3"]} style={{ width: "100%", maxWidth: 480 }}>
            <AccordionItem value="faq-1">
              <AccordionTrigger value="faq-1">Return policy</AccordionTrigger>
              <AccordionContent>Returns accepted within 30 days.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger value="faq-2">Shipping options</AccordionTrigger>
              <AccordionContent>Standard, express, and overnight shipping available.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger value="faq-3">Customer support</AccordionTrigger>
              <AccordionContent>Available via email, chat, or phone 24/7.</AccordionContent>
            </AccordionItem>
          </Accordion>
        }
        code={`<Accordion multiple defaultValue={["faq-1", "faq-3"]}>
  <AccordionItem value="faq-1">
    <AccordionTrigger value="faq-1">Return policy</AccordionTrigger>
    <AccordionContent>Returns accepted within 30 days.</AccordionContent>
  </AccordionItem>
  {/* ... */}
</Accordion>`}
      />
    </Page>
  );
}
