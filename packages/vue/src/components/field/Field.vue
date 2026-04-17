<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";

interface Props {
  orientation?: "vertical" | "horizontal";
}

const props = withDefaults(defineProps<Props>(), { orientation: "vertical" });
</script>

<template>
  <div
    role="group"
    data-slot="field"
    :data-orientation="props.orientation"
    :class="styles.field({ orientation: props.orientation })"
  >
    <slot />
  </div>
</template>
