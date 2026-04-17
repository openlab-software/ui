<script setup lang="ts">
import * as styles from "@openlab-ui/core/card/card.css";
</script>

<template>
  <div data-slot="card-actions" :class="styles.action">
    <slot />
  </div>
</template>
