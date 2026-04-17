<script setup lang="ts">
import * as styles from "@openlab-ui/core/popover/popover.css";
</script>

<template>
  <h3 data-slot="popover-title" :class="styles.title">
    <slot />
  </h3>
</template>
