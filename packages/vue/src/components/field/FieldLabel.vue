<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
</script>

<template>
  <label data-slot="field-label" :class="styles.fieldLabel">
    <slot />
  </label>
</template>
