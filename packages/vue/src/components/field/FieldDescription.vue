<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
</script>

<template>
  <p data-slot="field-description" :class="styles.fieldDescription">
    <slot />
  </p>
</template>
