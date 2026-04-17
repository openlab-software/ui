<script setup lang="ts">
import { Slider } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
import { ref } from "vue";

const value1 = ref(40);
const value2 = ref(50);
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 300px; display: flex; flex-direction: column; gap: 1.5rem">
      <Slider v-model="value1" :min="0" :max="100" :step="1" />
      <Slider v-model="value2" :min="0" :max="100" :step="10" />
      <Slider :default-value="50" :min="0" :max="100" :step="1" :disabled="true" />
    </div>
  </VuePreviewProvider>
</template>
