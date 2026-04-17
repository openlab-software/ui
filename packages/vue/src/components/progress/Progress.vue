<script setup lang="ts">
import * as styles from "@openlab-ui/core/progress/progress.css";

interface Props {
  value?: number;
  max?: number;
}

const props = withDefaults(defineProps<Props>(), { max: 100 });
</script>

<template>
  <div data-slot="progress" :class="styles.root">
    <slot>
      <div data-slot="progress-track" :class="styles.track">
        <div
          data-slot="progress-indicator"
          :class="styles.indicator"
          :style="props.value != null ? `--progress-value: ${props.value}` : undefined"
        />
      </div>
    </slot>
  </div>
</template>
