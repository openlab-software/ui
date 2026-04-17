<script setup lang="ts">
import * as styles from "@openlab-ui/core/scroll-area/scroll-area.css";
</script>

<template>
  <div data-slot="scroll-area" :class="styles.root">
    <div data-slot="scroll-area-viewport" :class="styles.viewport">
      <slot />
    </div>
    <div
      data-slot="scroll-area-scrollbar"
      data-orientation="vertical"
      :class="styles.scrollbar"
    >
      <div data-slot="scroll-area-thumb" :class="styles.thumb" />
    </div>
  </div>
</template>
