<script setup lang="ts">
import * as styles from "@openlab-ui/core/popover/popover.css";
import { inject, onMounted, onUnmounted } from "vue";

interface Props {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}

withDefaults(defineProps<Props>(), { side: "bottom", sideOffset: 4 });

const ctx = inject<{ isOpen: boolean; close: () => void }>("popover");

function handleOutsideClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest("[data-slot='popover']")) {
    ctx?.close();
  }
}

onMounted(() => document.addEventListener("click", handleOutsideClick, true));
onUnmounted(() => document.removeEventListener("click", handleOutsideClick, true));
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    data-slot="popover-content"
    data-open
    :class="styles.popup"
    style="position: absolute; z-index: 50; top: calc(100% + 4px); left: 0"
  >
    <slot />
  </div>
</template>
