<script setup lang="ts">
import * as styles from "@openlab-ui/core/progress/progress.css";
</script>

<template>
  <span data-slot="progress-label" :class="styles.label">
    <slot />
  </span>
</template>
