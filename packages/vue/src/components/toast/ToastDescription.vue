<script setup lang="ts">
import * as styles from "@openlab-ui/core/toast/toast.css";
</script>

<template>
  <p :class="styles.description">
    <slot />
  </p>
</template>
