<script setup lang="ts">
import * as styles from "@openlab-ui/core/meter/meter.css";
</script>

<template>
  <span :class="styles.label">
    <slot />
  </span>
</template>
