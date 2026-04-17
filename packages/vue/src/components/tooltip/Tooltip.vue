<script setup lang="ts">
import { provide, ref } from "vue";

interface Props {
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), { delay: 0 });

const isOpen = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

provide("tooltip", {
  get isOpen() { return isOpen.value; },
  show: () => {
    timer = setTimeout(() => { isOpen.value = true; }, props.delay);
  },
  hide: () => {
    if (timer) clearTimeout(timer);
    isOpen.value = false;
  },
});
</script>

<template>
  <div data-slot="tooltip" style="position: relative; display: inline-block">
    <slot />
  </div>
</template>
