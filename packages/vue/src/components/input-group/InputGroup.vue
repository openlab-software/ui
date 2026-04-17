<script setup lang="ts">
import * as styles from "@openlab-ui/core/input-group/input-group.css";
</script>

<template>
  <div data-slot="input-group" role="group" :class="styles.root">
    <slot />
  </div>
</template>
