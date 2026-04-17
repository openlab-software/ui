<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <tbody data-slot="table-body" :class="styles.tbody">
    <slot />
  </tbody>
</template>
