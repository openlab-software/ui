<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";

interface Props {
  variant?: "legend" | "label";
}

const props = withDefaults(defineProps<Props>(), { variant: "legend" });
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="props.variant"
    :class="styles.fieldLegend({ variant: props.variant })"
  >
    <slot />
  </legend>
</template>
