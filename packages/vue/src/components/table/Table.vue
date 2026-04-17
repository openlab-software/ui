<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <div data-slot="table-container" :class="styles.tableContainer">
    <table data-slot="table" :class="styles.table">
      <slot />
    </table>
  </div>
</template>
