<script setup lang="ts">
import * as styles from "@openlab-ui/core/select/select.css";
import { computed, inject } from "vue";

interface Props {
  value: string;
  disabled?: boolean;
}

const props = defineProps<Props>();

const ctx = inject<{ value?: string; setValue: (v: string) => void }>("select-dropdown");

const isSelected = computed(() => ctx?.value === props.value);
</script>

<template>
  <li
    data-slot="select-item"
    :class="styles.item"
    :data-selected="isSelected ? '' : undefined"
    :aria-selected="isSelected"
    role="option"
    @click="!props.disabled && ctx?.setValue(props.value)"
  >
    <span :class="styles.itemText">
      <slot />
    </span>
    <span v-if="isSelected" :class="styles.itemIndicator">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  </li>
</template>
