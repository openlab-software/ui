<script setup lang="ts">
import * as styles from "@openlab-ui/core/radio-group/radio-group.css";
import { provide, ref } from "vue";

interface Props {
  modelValue?: string;
  defaultValue?: string;
  name?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const selected = ref(props.modelValue ?? props.defaultValue ?? "");

provide("radio-group", {
  name: props.name,
  selected,
  select: (value: string) => {
    selected.value = value;
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div data-slot="radio-group" role="radiogroup" :class="styles.root">
    <slot />
  </div>
</template>
