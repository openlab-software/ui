<script setup lang="ts">
interface Props {
  delay?: number;
}

withDefaults(defineProps<Props>(), { delay: 0 });
</script>

<template>
  <slot />
</template>
