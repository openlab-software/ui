<script setup lang="ts">
import * as styles from "@openlab-ui/core/toast/toast.css";
</script>

<template>
  <div :class="styles.title">
    <slot />
  </div>
</template>
