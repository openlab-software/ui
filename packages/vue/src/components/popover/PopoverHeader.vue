<script setup lang="ts">
import * as styles from "@openlab-ui/core/popover/popover.css";
</script>

<template>
  <div data-slot="popover-header" :class="styles.header">
    <slot />
  </div>
</template>
