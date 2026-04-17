<script setup lang="ts">
import * as styles from "@openlab-ui/core/label/label.css";
</script>

<template>
  <label data-slot="label" :class="styles.root">
    <slot />
  </label>
</template>
