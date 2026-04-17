<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
import * as separatorStyles from "@openlab-ui/core/separator/separator.css";
</script>

<template>
  <div
    data-slot="field-separator"
    :class="styles.fieldSeparator"
  >
    <div
      role="separator"
      :class="separatorStyles.root"
      style="position: absolute; inset: 0; top: 50%"
    />
    <span
      v-if="$slots.default"
      data-slot="field-separator-content"
      :class="styles.fieldSeparatorContent"
    >
      <slot />
    </span>
  </div>
</template>
