<script setup lang="ts">
import * as styles from "@openlab-ui/core/input-group/input-group.css";

interface Props {
  align?: "inline-start" | "inline-end";
}

const props = withDefaults(defineProps<Props>(), { align: "inline-start" });

function handleClick(e: MouseEvent) {
  if ((e.target as HTMLElement).closest("button")) return;
  (e.currentTarget as HTMLElement).parentElement
    ?.querySelector("input")
    ?.focus();
}
</script>

<template>
  <div
    role="group"
    data-slot="input-group-addon"
    :data-align="props.align"
    :class="styles.addon({ align: props.align })"
    @click="handleClick"
  >
    <slot />
  </div>
</template>
