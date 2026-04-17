<script setup lang="ts">
import * as styles from "@openlab-ui/core/switch/switch.css";
import { computed } from "vue";

interface Props {
  size?: "default" | "sm";
  disabled?: boolean;
  defaultChecked?: boolean;
}

const props = withDefaults(defineProps<Props>(), { size: "default" });

const model = defineModel<boolean>({ default: false });

const isChecked = computed(() => model.value ?? props.defaultChecked ?? false);
</script>

<template>
  <button
    type="button"
    role="switch"
    data-slot="switch"
    :data-size="props.size"
    :aria-checked="isChecked"
    :data-checked="isChecked ? '' : undefined"
    :data-unchecked="!isChecked ? '' : undefined"
    :disabled="props.disabled"
    :class="styles.root"
    @click="model = !isChecked"
  >
    <span data-slot="switch-thumb" :class="styles.thumb" />
  </button>
</template>
