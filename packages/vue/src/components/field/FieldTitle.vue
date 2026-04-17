<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
</script>

<template>
  <div data-slot="field-label" :class="styles.fieldTitle">
    <slot />
  </div>
</template>
