<script setup lang="ts">
import * as styles from "@openlab-ui/core/dialog/dialog.css";
</script>

<template>
  <div data-slot="dialog-header" :class="styles.header">
    <slot />
  </div>
</template>
