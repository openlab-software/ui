<script setup lang="ts">
import * as styles from "@openlab-ui/core/button/button.css";
import { computed } from "vue";

type ButtonProps = {
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
};

const props = defineProps<ButtonProps>();
const className = computed(() => styles.button({ variant: props.variant, size: props.size }));
</script>

<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>
