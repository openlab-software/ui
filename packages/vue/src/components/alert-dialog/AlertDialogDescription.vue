<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert-dialog/alert-dialog.css";
</script>

<template>
  <p data-slot="alert-dialog-description" :class="styles.description">
    <slot />
  </p>
</template>
