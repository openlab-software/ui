<script setup lang="ts">
import * as styles from "@openlab-ui/core/tabs/tabs.css";
import { computed, inject } from "vue";

interface Props {
  value: string;
}

const props = defineProps<Props>();

const ctx = inject<{ activeTab: string }>("tabs");

const isActive = computed(() => ctx?.activeTab === props.value);
</script>

<template>
  <div
    v-if="isActive"
    role="tabpanel"
    data-slot="tabs-content"
    :class="styles.panel"
  >
    <slot />
  </div>
</template>
