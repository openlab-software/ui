<script setup lang="ts">
import * as styles from "@openlab-ui/core/navigation-menu/navigation-menu.css";
</script>

<template>
  <ul :class="styles.list">
    <slot />
  </ul>
</template>
