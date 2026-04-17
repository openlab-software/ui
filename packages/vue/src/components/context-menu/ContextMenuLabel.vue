<script setup lang="ts">
import * as styles from "@openlab-ui/core/context-menu/context-menu.css";

interface Props {
  inset?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    data-slot="context-menu-label"
    :data-inset="props.inset"
    :class="styles.label"
  >
    <slot />
  </div>
</template>
