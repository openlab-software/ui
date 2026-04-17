<script setup lang="ts">
import * as styles from "@openlab-ui/core/tooltip/tooltip.css";
import { inject } from "vue";

interface Props {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}

const props = withDefaults(defineProps<Props>(), { side: "top", sideOffset: 4 });

const ctx = inject<{ isOpen: boolean }>("tooltip");

const positionStyle: Record<string, string> = {
  top: "bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%)",
  bottom: "top: calc(100% + 4px); left: 50%; transform: translateX(-50%)",
  left: "right: calc(100% + 4px); top: 50%; transform: translateY(-50%)",
  right: "left: calc(100% + 4px); top: 50%; transform: translateY(-50%)",
};
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    data-slot="tooltip-content"
    data-open
    :class="styles.popup"
    :style="`position: absolute; z-index: 50; ${positionStyle[props.side]}`"
  >
    <slot />
  </div>
</template>
