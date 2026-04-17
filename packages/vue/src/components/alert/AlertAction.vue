<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert/alert.css";
</script>

<template>
  <div data-slot="alert-action" :class="styles.action">
    <slot />
  </div>
</template>
