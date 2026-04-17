<script setup lang="ts">
import { provide, ref } from "vue";

interface Position {
  x: number;
  y: number;
}

const isOpen = ref(false);
const position = ref<Position>({ x: 0, y: 0 });

provide("context-menu", {
  get isOpen() { return isOpen.value; },
  get position() { return position.value; },
  open: (x: number, y: number) => {
    position.value = { x, y };
    isOpen.value = true;
  },
  close: () => { isOpen.value = false; },
});

function handleContextMenu(e: MouseEvent) {
  e.preventDefault();
  position.value = { x: e.clientX, y: e.clientY };
  isOpen.value = true;
}

function handleClose() {
  isOpen.value = false;
}
</script>

<template>
  <div data-slot="context-menu" @contextmenu="handleContextMenu">
    <slot />
    <Teleport to="body">
      <div
        v-if="isOpen"
        style="position: fixed; inset: 0; z-index: 49"
        @click="handleClose"
      />
    </Teleport>
  </div>
</template>
