<script setup lang="ts">
import * as styles from "@openlab-ui/core/checkbox/checkbox.css";
import { computed } from "vue";

interface Props {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
}

const props = defineProps<Props>();
const model = defineModel<boolean>("checked");

const isChecked = computed(() => model.value ?? props.defaultChecked ?? false);
</script>

<template>
  <button
    type="button"
    role="checkbox"
    data-slot="checkbox"
    :aria-checked="isChecked"
    :data-checked="isChecked ? '' : undefined"
    :disabled="props.disabled"
    :class="styles.root"
    @click="model = !isChecked"
  >
    <span data-slot="checkbox-indicator" :class="styles.indicator">
      <svg
        v-if="isChecked"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  </button>
</template>
