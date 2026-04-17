<script setup lang="ts">
import * as styles from "@openlab-ui/core/toast/toast.css";
</script>

<template>
  <button type="button" :class="styles.action">
    <slot />
  </button>
</template>
