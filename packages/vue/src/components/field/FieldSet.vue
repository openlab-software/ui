<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
</script>

<template>
  <fieldset data-slot="field-set" :class="styles.fieldSet">
    <slot />
  </fieldset>
</template>
