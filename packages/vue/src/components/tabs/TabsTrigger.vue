<script setup lang="ts">
import * as styles from "@openlab-ui/core/tabs/tabs.css";
import { computed, inject } from "vue";

interface Props {
  value: string;
  disabled?: boolean;
}

const props = defineProps<Props>();

const ctx = inject<{ activeTab: string; setActiveTab: (v: string) => void }>("tabs");

const isActive = computed(() => ctx?.activeTab === props.value);
</script>

<template>
  <button
    type="button"
    role="tab"
    data-slot="tabs-trigger"
    :data-active="isActive ? '' : undefined"
    :aria-selected="isActive"
    :disabled="props.disabled"
    :class="styles.trigger"
    @click="ctx?.setActiveTab(props.value)"
  >
    <slot />
  </button>
</template>
