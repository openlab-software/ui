<script setup lang="ts">
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";
</script>

<template>
  <nav aria-label="breadcrumb" data-slot="breadcrumb" :class="styles.root">
    <slot />
  </nav>
</template>
