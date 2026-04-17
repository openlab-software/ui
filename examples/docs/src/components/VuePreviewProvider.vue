<script setup lang="ts">
import { OpenLabUIProvider } from "@openlab-ui/vue";
import { ref, onMounted, onUnmounted } from "vue";

const isDark = ref(false);
let observer: MutationObserver | undefined;

onMounted(() => {
  isDark.value = localStorage.getItem("openlab-dark") === "true";
  const root = document.getElementById("theme-root");
  if (!root) return;
  observer = new MutationObserver(() => {
    isDark.value = localStorage.getItem("openlab-dark") === "true";
  });
  observer.observe(root, { attributes: true, attributeFilter: ["class"] });
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <OpenLabUIProvider :dark="isDark">
    <slot />
  </OpenLabUIProvider>
</template>
