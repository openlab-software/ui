<script setup lang="ts">
import * as styles from "@openlab-ui/core/navigation-menu/navigation-menu.css";
</script>

<template>
  <nav :class="styles.root">
    <slot />
  </nav>
</template>
