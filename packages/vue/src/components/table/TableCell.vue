<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <td data-slot="table-cell" :class="styles.td">
    <slot />
  </td>
</template>
