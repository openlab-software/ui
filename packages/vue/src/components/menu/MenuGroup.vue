<script setup lang="ts">
import * as styles from "@openlab-ui/core/menu/menu.css";
</script>

<template>
  <div role="group" :class="styles.group">
    <slot />
  </div>
</template>
