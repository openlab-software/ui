import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function AccordionBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 480 }}>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is OpenLab UI?</AccordionTrigger>
            <AccordionContent>
              OpenLab UI is a headless component library built with vanilla-extract CSS
              and available for React and Vue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does theming work?</AccordionTrigger>
            <AccordionContent>
              Theming is handled via CSS variables defined in a theme contract.
              Wrap your app with OpenLabUIProvider to apply the default or dark theme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes, all components follow WAI-ARIA guidelines and are keyboard navigable.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ReactPreviewProvider>
  );
}
