<script setup lang="ts">
import * as styles from "@openlab-ui/core/select/select.css";
</script>

<template>
  <div data-slot="select-group" :class="styles.group" role="group">
    <slot />
  </div>
</template>
