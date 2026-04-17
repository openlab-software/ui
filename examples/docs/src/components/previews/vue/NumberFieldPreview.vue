<script setup lang="ts">
import {
  NumberFieldRoot,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
  Label,
  Field,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; max-width: 280px">
      <Field>
        <Label>Quantity</Label>
        <NumberFieldRoot :default-value="1" :min="0" :max="99">
          <NumberFieldGroup>
            <NumberFieldDecrement>−</NumberFieldDecrement>
            <NumberFieldInput />
            <NumberFieldIncrement>+</NumberFieldIncrement>
          </NumberFieldGroup>
        </NumberFieldRoot>
      </Field>
      <Field>
        <Label>Price (disabled)</Label>
        <NumberFieldRoot :default-value="42" :disabled="true">
          <NumberFieldGroup>
            <NumberFieldDecrement>−</NumberFieldDecrement>
            <NumberFieldInput />
            <NumberFieldIncrement>+</NumberFieldIncrement>
          </NumberFieldGroup>
        </NumberFieldRoot>
      </Field>
    </div>
  </VuePreviewProvider>
</template>
