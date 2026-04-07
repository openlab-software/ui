import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@patrick-ui/react";

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["returns", "support"]} multiple>
      <AccordionItem value="shipping">
        <AccordionTrigger value="shipping">
          What are your shipping options?
        </AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger value="returns">Oiii</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger value="support">
          How can I contact customer support?
        </AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
