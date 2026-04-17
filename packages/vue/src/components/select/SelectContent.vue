<script setup lang="ts">
import * as styles from "@openlab-ui/core/select/select.css";
import { inject, onMounted, onUnmounted } from "vue";

interface Props {
  side?: "top" | "bottom";
  sideOffset?: number;
}

withDefaults(defineProps<Props>(), { side: "bottom", sideOffset: 4 });

const ctx = inject<{ isOpen: boolean; close: () => void }>("select-dropdown");

function handleOutside(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest("[data-slot='select-trigger']") &&
      !(e.target as HTMLElement).closest("[data-slot='select-content']")) {
    ctx?.close();
  }
}

onMounted(() => document.addEventListener("click", handleOutside, true));
onUnmounted(() => document.removeEventListener("click", handleOutside, true));
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    data-slot="select-content"
    :class="styles.popup"
    style="position: absolute; z-index: 50; top: calc(100% + 4px); left: 0; min-width: 100%"
  >
    <ul :class="styles.list">
      <slot />
    </ul>
  </div>
</template>
