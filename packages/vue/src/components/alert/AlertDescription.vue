<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert/alert.css";
</script>

<template>
  <div data-slot="alert-description" :class="styles.description">
    <slot />
  </div>
</template>
