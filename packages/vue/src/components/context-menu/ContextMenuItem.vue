<script setup lang="ts">
import * as styles from "@openlab-ui/core/context-menu/context-menu.css";
import { inject } from "vue";

interface Props {
  inset?: boolean;
  variant?: "default" | "destructive";
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });

const ctx = inject<{ close: () => void }>("context-menu");
</script>

<template>
  <div
    role="menuitem"
    data-slot="context-menu-item"
    :data-inset="props.inset"
    :data-variant="props.variant"
    :class="styles.itemVariant({ variant: props.variant })"
    @click="ctx?.close()"
  >
    <slot />
  </div>
</template>
