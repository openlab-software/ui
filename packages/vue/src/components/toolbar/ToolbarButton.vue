<script setup lang="ts">
import * as styles from "@openlab-ui/core/toolbar/toolbar.css";
</script>

<template>
  <button type="button" :class="styles.button">
    <slot />
  </button>
</template>
