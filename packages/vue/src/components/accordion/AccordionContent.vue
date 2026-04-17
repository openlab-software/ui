<script setup lang="ts">
import * as styles from "@openlab-ui/core/accordion/accordion.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean }>("accordion-item");
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    data-slot="accordion-content"
    data-open
    :class="styles.panel"
  >
    <div :class="styles.panelContent">
      <slot />
    </div>
  </div>
</template>
