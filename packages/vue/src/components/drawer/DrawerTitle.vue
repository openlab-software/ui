<script setup lang="ts">
import * as styles from "@openlab-ui/core/drawer/drawer.css";
</script>

<template>
  <h2 :class="styles.title">
    <slot />
  </h2>
</template>
