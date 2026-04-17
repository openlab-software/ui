<script setup lang="ts">
import * as styles from "@openlab-ui/core/avatar/avatar.css";

interface Props {
  size?: "default" | "sm" | "lg";
}

const props = withDefaults(defineProps<Props>(), { size: "default" });
</script>

<template>
  <div data-slot="avatar" :data-size="props.size" :class="styles.root">
    <slot />
  </div>
</template>
