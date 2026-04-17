<script setup lang="ts">
import * as styles from "@openlab-ui/core/radio-group/radio-group.css";
import { computed, inject } from "vue";
import type { Ref } from "vue";

interface Props {
  value: string;
  disabled?: boolean;
}

const props = defineProps<Props>();

const ctx = inject<{
  selected: Ref<string>;
  select: (value: string) => void;
  name?: string;
}>("radio-group");

const isChecked = computed(() => ctx?.selected.value === props.value);
</script>

<template>
  <button
    type="button"
    role="radio"
    data-slot="radio-group-item"
    :aria-checked="isChecked"
    :data-checked="isChecked ? '' : undefined"
    :disabled="props.disabled"
    :class="styles.item"
    @click="ctx?.select(props.value)"
  >
    <span
      data-slot="radio-group-indicator"
      :class="styles.indicator"
    >
      <span v-if="isChecked" :class="styles.indicatorDot" />
    </span>
  </button>
</template>
