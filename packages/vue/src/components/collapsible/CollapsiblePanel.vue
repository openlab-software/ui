<script setup lang="ts">
import * as styles from "@openlab-ui/core/collapsible/collapsible.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean }>("collapsible");
</script>

<template>
  <div v-if="ctx?.isOpen" :class="styles.panel">
    <slot />
  </div>
</template>
