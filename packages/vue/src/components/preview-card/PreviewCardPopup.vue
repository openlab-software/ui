<script setup lang="ts">
import * as styles from "@openlab-ui/core/preview-card/preview-card.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean }>("preview-card");
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    :class="styles.popup"
    style="position: absolute; z-index: 50; top: calc(100% + 4px); left: 0"
  >
    <slot />
  </div>
</template>
