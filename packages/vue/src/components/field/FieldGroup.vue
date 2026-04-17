<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
</script>

<template>
  <div data-slot="field-group" :class="styles.fieldGroup">
    <slot />
  </div>
</template>
