<script setup lang="ts">
import * as styles from "@openlab-ui/core/dialog/dialog.css";
</script>

<template>
  <h2 data-slot="dialog-title" :class="styles.title">
    <slot />
  </h2>
</template>
