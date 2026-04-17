<script setup lang="ts">
import { RadioGroup, RadioGroupItem, Label, Field } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <RadioGroup default-value="option-1">
      <Field orientation="horizontal">
        <RadioGroupItem value="option-1" id="r1-vue" />
        <Label for="r1-vue">Option one</Label>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option-2" id="r2-vue" />
        <Label for="r2-vue">Option two</Label>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option-3" id="r3-vue" :disabled="true" />
        <Label for="r3-vue">Option three (disabled)</Label>
      </Field>
    </RadioGroup>
  </VuePreviewProvider>
</template>
