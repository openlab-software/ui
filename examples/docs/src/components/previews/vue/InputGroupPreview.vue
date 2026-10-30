<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 360px; display: flex; flex-direction: column; gap: 0.75rem">
      <InputGroup>
        <InputGroupAddon><InputGroupText>$</InputGroupText></InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Your name" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Save</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  </VuePreviewProvider>
</template>
