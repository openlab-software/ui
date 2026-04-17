<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <tfoot data-slot="table-footer" :class="styles.tfoot">
    <slot />
  </tfoot>
</template>
