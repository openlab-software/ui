<script setup lang="ts">
import * as styles from "@openlab-ui/core/select/select.css";
</script>

<template>
  <div data-slot="select-label" :class="styles.label">
    <slot />
  </div>
</template>
