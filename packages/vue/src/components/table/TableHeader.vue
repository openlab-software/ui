<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <thead data-slot="table-header" :class="styles.thead">
    <slot />
  </thead>
</template>
