<script setup lang="ts">
import * as styles from "@openlab-ui/core/kbd/kbd.css";
</script>

<template>
  <kbd data-slot="kbd" :class="styles.root">
    <slot />
  </kbd>
</template>
