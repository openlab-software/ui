<script setup lang="ts">
import * as styles from "@openlab-ui/core/tabs/tabs.css";
import { provide, ref } from "vue";

interface Props {
  defaultValue?: string;
  orientation?: "horizontal" | "vertical";
}

const props = withDefaults(defineProps<Props>(), { orientation: "horizontal" });

const model = defineModel<string>();
const activeTab = ref(model.value ?? props.defaultValue ?? "");

provide("tabs", {
  get activeTab() { return activeTab.value; },
  setActiveTab: (value: string) => {
    activeTab.value = value;
    model.value = value;
  },
});
</script>

<template>
  <div
    data-slot="tabs"
    :data-orientation="props.orientation"
    :class="styles.root"
  >
    <slot />
  </div>
</template>
