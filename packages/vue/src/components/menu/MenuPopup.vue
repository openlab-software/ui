<script setup lang="ts">
import * as styles from "@openlab-ui/core/menu/menu.css";
import { inject, onMounted, onUnmounted } from "vue";

const ctx = inject<{ isOpen: boolean; close: () => void }>("menu");

function handleOutside(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest("[data-slot='menu']")) {
    ctx?.close();
  }
}

onMounted(() => document.addEventListener("click", handleOutside, true));
onUnmounted(() => document.removeEventListener("click", handleOutside, true));
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    role="menu"
    :class="styles.popup"
    style="position: absolute; z-index: 50; top: 100%; left: 0; min-width: 8rem"
  >
    <slot />
  </div>
</template>
