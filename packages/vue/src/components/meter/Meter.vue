<script setup lang="ts">
import * as styles from "@openlab-ui/core/meter/meter.css";

interface Props {
  value?: number;
  min?: number;
  max?: number;
}

withDefaults(defineProps<Props>(), { min: 0, max: 100 });
</script>

<template>
  <div :class="styles.root">
    <slot>
      <div :class="styles.track">
        <div :class="styles.indicator" />
      </div>
    </slot>
  </div>
</template>
