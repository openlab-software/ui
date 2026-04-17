<script setup lang="ts">
import { Switch, Label, Field } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="display: flex; flex-direction: column; gap: 0.75rem">
      <Field orientation="horizontal">
        <Switch id="notifications-vue" :default-checked="true" />
        <Label for="notifications-vue">Enable notifications</Label>
      </Field>
      <Field orientation="horizontal">
        <Switch id="emails-vue" />
        <Label for="emails-vue">Marketing emails</Label>
      </Field>
      <Field orientation="horizontal">
        <Switch id="sw-disabled-vue" :disabled="true" />
        <Label for="sw-disabled-vue">Disabled</Label>
      </Field>
    </div>
  </VuePreviewProvider>
</template>
