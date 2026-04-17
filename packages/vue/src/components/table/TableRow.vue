<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <tr data-slot="table-row" :class="styles.tr">
    <slot />
  </tr>
</template>
