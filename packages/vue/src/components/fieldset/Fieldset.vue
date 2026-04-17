<script setup lang="ts">
import * as styles from "@openlab-ui/core/fieldset/fieldset.css";
</script>

<template>
  <fieldset :class="styles.root">
    <slot />
  </fieldset>
</template>
