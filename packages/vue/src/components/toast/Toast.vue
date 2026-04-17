<script setup lang="ts">
import * as styles from "@openlab-ui/core/toast/toast.css";

interface Props {
  open?: boolean;
}

const props = withDefaults(defineProps<Props>(), { open: true });
</script>

<template>
  <div v-if="props.open" :class="styles.root" role="status" aria-live="polite">
    <slot />
  </div>
</template>
