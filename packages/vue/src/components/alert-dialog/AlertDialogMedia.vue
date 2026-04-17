<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert-dialog/alert-dialog.css";
</script>

<template>
  <div data-slot="alert-dialog-media" :class="styles.media">
    <slot />
  </div>
</template>
