<script setup lang="ts">
import * as styles from "@openlab-ui/core/fieldset/fieldset.css";
</script>

<template>
  <legend :class="styles.legend">
    <slot />
  </legend>
</template>
