<script setup lang="ts">
import * as styles from "@openlab-ui/core/card/card.css";
</script>

<template>
  <div data-slot="card-footer" :class="styles.footer">
    <slot />
  </div>
</template>
