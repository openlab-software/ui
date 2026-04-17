<script setup lang="ts">
import { Checkbox, Label, Field } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="display: flex; flex-direction: column; gap: 0.75rem">
      <Field orientation="horizontal">
        <Checkbox id="terms-vue" :default-checked="true" />
        <Label for="terms-vue">Accept terms and conditions</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="newsletter-vue" />
        <Label for="newsletter-vue">Subscribe to newsletter</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="disabled-vue" :disabled="true" />
        <Label for="disabled-vue">Disabled option</Label>
      </Field>
    </div>
  </VuePreviewProvider>
</template>
