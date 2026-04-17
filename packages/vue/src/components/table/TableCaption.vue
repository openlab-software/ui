<script setup lang="ts">
import * as styles from "@openlab-ui/core/table/table.css";
</script>

<template>
  <caption data-slot="table-caption" :class="styles.caption">
    <slot />
  </caption>
</template>
