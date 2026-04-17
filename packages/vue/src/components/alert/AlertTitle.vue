<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert/alert.css";
</script>

<template>
  <div data-slot="alert-title" :class="styles.title">
    <slot />
  </div>
</template>
