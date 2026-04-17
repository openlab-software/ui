<script setup lang="ts">
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <Avatar>
      <AvatarImage src="https://github.com/patrickdevbr.png" alt="Patrick" />
      <AvatarFallback>PR</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    <AvatarGroup>
      <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  </VuePreviewProvider>
</template>
