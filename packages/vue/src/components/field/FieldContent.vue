<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
</script>

<template>
  <div data-slot="field-content" :class="styles.fieldContent">
    <slot />
  </div>
</template>
