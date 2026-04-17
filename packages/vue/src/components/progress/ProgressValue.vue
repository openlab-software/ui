<script setup lang="ts">
import * as styles from "@openlab-ui/core/progress/progress.css";
</script>

<template>
  <span data-slot="progress-value" :class="styles.value">
    <slot />
  </span>
</template>
