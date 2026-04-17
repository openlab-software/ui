<script setup lang="ts">
import * as styles from "@openlab-ui/core/card/card.css";
</script>

<template>
  <div data-slot="card-content" :class="styles.content">
    <slot />
  </div>
</template>
