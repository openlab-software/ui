<script setup lang="ts">
import * as styles from "@openlab-ui/core/context-menu/context-menu.css";
import { inject, onMounted, ref } from "vue";

const ctx = inject<{
  isOpen: boolean;
  position: { x: number; y: number };
}>("context-menu");

// Teleport only after mount: SSR cannot render into <body>, so hydrating it mismatches.
const mounted = ref(false);
onMounted(() => (mounted.value = true));
</script>

<template>
  <Teleport v-if="mounted" to="body">
    <div
      v-if="ctx?.isOpen"
      data-slot="context-menu-content"
      :class="styles.popup"
      :style="`position: fixed; z-index: 50; left: ${ctx.position.x}px; top: ${ctx.position.y}px`"
    >
      <slot />
    </div>
  </Teleport>
</template>
