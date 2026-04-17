<script setup lang="ts">
import { Input, Textarea, Label, Field } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 360px; display: flex; flex-direction: column; gap: 1rem">
      <Field>
        <Label>Email</Label>
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field>
        <Label>Message</Label>
        <Textarea placeholder="Type your message…" />
      </Field>
      <Input disabled placeholder="Disabled input" />
    </div>
  </VuePreviewProvider>
</template>
