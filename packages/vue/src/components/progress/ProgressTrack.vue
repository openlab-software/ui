<script setup lang="ts">
import * as styles from "@openlab-ui/core/progress/progress.css";
</script>

<template>
  <div data-slot="progress-track" :class="styles.track">
    <slot />
  </div>
</template>
