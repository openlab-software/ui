<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <th data-slot="table-head" :class="styles.th">
    <slot />
  </th>
</template>
