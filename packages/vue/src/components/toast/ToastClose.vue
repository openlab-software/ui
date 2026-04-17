<script setup lang="ts">
import * as styles from "@openlab-ui/core/toast/toast.css";

defineEmits<{ click: [e: MouseEvent] }>();
</script>

<template>
  <button type="button" :class="styles.close" @click="$emit('click', $event)">
    <slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
      </svg>
    </slot>
  </button>
</template>
