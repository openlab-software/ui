<script setup lang="ts">
import * as styles from "@openlab-ui/core/form/form.css";
</script>

<template>
  <form :class="styles.root">
    <slot />
  </form>
</template>
