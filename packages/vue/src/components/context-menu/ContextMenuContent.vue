<script setup lang="ts">
import * as styles from "@openlab-ui/core/context-menu/context-menu.css";
import { inject } from "vue";

const ctx = inject<{
  isOpen: boolean;
  position: { x: number; y: number };
}>("context-menu");
</script>

<template>
  <Teleport to="body">
    <div
      v-if="ctx?.isOpen"
      data-slot="context-menu-content"
      :class="styles.popup"
      :style="`position: fixed; z-index: 50; left: ${ctx.position.x}px; top: ${ctx.position.y}px`"
    >
      <slot />
    </div>
  </Teleport>
</template>
