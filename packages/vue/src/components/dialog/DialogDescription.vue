<script setup lang="ts">
import * as styles from "@openlab-ui/core/dialog/dialog.css";
</script>

<template>
  <p data-slot="dialog-description" :class="styles.description">
    <slot />
  </p>
</template>
