<script setup lang="ts">
import * as styles from "@openlab-ui/core/card/card.css";

interface Props {
  size?: "default" | "sm";
}

const props = withDefaults(defineProps<Props>(), { size: "default" });
</script>

<template>
  <div data-slot="card" :data-size="props.size" :class="styles.root">
    <slot />
  </div>
</template>
