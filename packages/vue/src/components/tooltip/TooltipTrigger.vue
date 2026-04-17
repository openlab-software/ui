<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ show: () => void; hide: () => void }>("tooltip");
</script>

<template>
  <div
    data-slot="tooltip-trigger"
    style="display: contents"
    @mouseenter="ctx?.show()"
    @mouseleave="ctx?.hide()"
    @focus="ctx?.show()"
    @blur="ctx?.hide()"
  >
    <slot />
  </div>
</template>
