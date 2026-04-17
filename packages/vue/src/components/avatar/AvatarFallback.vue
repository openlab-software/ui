<script setup lang="ts">
import * as styles from "@openlab-ui/core/avatar/avatar.css";
</script>

<template>
  <span data-slot="avatar-fallback" :class="styles.fallback">
    <slot />
  </span>
</template>
