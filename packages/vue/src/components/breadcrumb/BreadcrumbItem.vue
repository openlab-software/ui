<script setup lang="ts">
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";
</script>

<template>
  <li data-slot="breadcrumb-item" :class="styles.item">
    <slot />
  </li>
</template>
