<script setup lang="ts">
import * as styles from "@openlab-ui/core/kbd/kbd.css";
</script>

<template>
  <div data-slot="kbd-group" :class="styles.group">
    <slot />
  </div>
</template>
