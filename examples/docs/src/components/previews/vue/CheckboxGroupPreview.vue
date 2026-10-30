<script setup lang="ts">
import { Checkbox, CheckboxGroup, Field, Label } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const items = ["Apple", "Banana", "Cherry"];
</script>

<template>
  <VuePreviewProvider>
    <CheckboxGroup>
      <Field v-for="item in items" :key="item" orientation="horizontal">
        <Checkbox :id="`cg-${item}`" :default-checked="item === 'Apple'" />
        <Label :for="`cg-${item}`">{{ item }}</Label>
      </Field>
    </CheckboxGroup>
  </VuePreviewProvider>
</template>
