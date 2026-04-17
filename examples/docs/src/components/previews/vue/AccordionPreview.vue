<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 480px">
      <Accordion default-value="item-1">
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
            Theming is handled via CSS variables. Wrap your app with OpenLabUIProvider.
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
  </VuePreviewProvider>
</template>
