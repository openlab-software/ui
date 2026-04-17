<script setup lang="ts">
import * as styles from "@openlab-ui/core/slider/slider.css";
import { computed } from "vue";

interface Props {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  defaultValue?: number;
}

const props = withDefaults(defineProps<Props>(), { min: 0, max: 100, step: 1 });

const model = defineModel<number>({ default: 0 });

const percentage = computed(() => {
  const val = model.value ?? props.defaultValue ?? props.min;
  return ((val - props.min) / (props.max - props.min)) * 100;
});
</script>

<template>
  <div data-slot="slider" data-orientation="horizontal" :class="styles.root">
    <div :class="styles.control" data-orientation="horizontal">
      <div data-slot="slider-track" :class="styles.track" data-orientation="horizontal">
        <div
          data-slot="slider-range"
          :class="styles.indicator"
          data-orientation="horizontal"
          :style="`width: ${percentage}%`"
        />
      </div>
      <span
        data-slot="slider-thumb"
        :class="styles.thumb"
        :style="`position: absolute; left: calc(${percentage}% - 0.5rem); top: 50%; transform: translateY(-50%)`"
      />
      <input
        type="range"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :disabled="props.disabled"
        :value="model"
        aria-hidden="true"
        style="position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%"
        @input="model = Number(($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>
