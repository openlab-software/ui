<script setup lang="ts">
import * as styles from "@openlab-ui/core/navigation-menu/navigation-menu.css";
</script>

<template>
  <button type="button" :class="styles.trigger">
    <slot />
  </button>
</template>
