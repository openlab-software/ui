<script setup lang="ts">
import * as styles from "@openlab-ui/core/autocomplete/autocomplete.css";
</script>

<template>
  <ul role="listbox" :class="styles.listbox">
    <slot />
  </ul>
</template>
