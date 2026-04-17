<script setup lang="ts">
import * as styles from "@openlab-ui/core/context-menu/context-menu.css";
</script>

<template>
  <span data-slot="context-menu-shortcut" :class="styles.shortcut">
    <slot />
  </span>
</template>
