<script setup lang="ts">
import * as buttonStyles from "@openlab-ui/core/button/button.css";
import { inject } from "vue";

interface Props {
  variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost";
  size?: "default" | "xs" | "sm" | "lg";
}

const props = withDefaults(defineProps<Props>(), { variant: "outline", size: "default" });

const ctx = inject<{ close: () => void }>("alert-dialog");
</script>

<template>
  <button
    type="button"
    data-slot="alert-dialog-cancel"
    :class="buttonStyles.button({ variant: props.variant, size: props.size })"
    @click="ctx?.close()"
  >
    <slot />
  </button>
</template>
