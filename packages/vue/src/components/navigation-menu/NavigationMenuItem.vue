<script setup lang="ts">
import * as styles from "@openlab-ui/core/navigation-menu/navigation-menu.css";
</script>

<template>
  <li :class="styles.item">
    <slot />
  </li>
</template>
