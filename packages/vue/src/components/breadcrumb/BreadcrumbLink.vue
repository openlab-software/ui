<script setup lang="ts">
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";
</script>

<template>
  <a data-slot="breadcrumb-link" :class="styles.link">
    <slot />
  </a>
</template>
