<script setup lang="ts">
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";
</script>

<template>
  <ol data-slot="breadcrumb-list" :class="styles.list">
    <slot />
  </ol>
</template>
