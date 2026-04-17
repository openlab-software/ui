<script setup lang="ts">
import * as styles from "@openlab-ui/core/popover/popover.css";
</script>

<template>
  <p data-slot="popover-description" :class="styles.description">
    <slot />
  </p>
</template>
