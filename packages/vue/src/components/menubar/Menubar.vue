<script setup lang="ts">
import * as styles from "@openlab-ui/core/menubar/menubar.css";
</script>

<template>
  <div role="menubar" :class="styles.root">
    <slot />
  </div>
</template>
