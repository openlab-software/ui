<script setup lang="ts">
import * as styles from "@openlab-ui/core/tabs/tabs.css";

interface Props {
  variant?: "default" | "line";
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });
</script>

<template>
  <div
    data-slot="tabs-list"
    :data-variant="props.variant"
    :class="styles.list({ variant: props.variant })"
    role="tablist"
  >
    <slot />
  </div>
</template>
