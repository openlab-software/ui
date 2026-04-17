<script setup lang="ts">
import * as styles from "@openlab-ui/core/context-menu/context-menu.css";
</script>

<template>
  <div
    role="separator"
    data-slot="context-menu-separator"
    :class="styles.separator"
  />
</template>
