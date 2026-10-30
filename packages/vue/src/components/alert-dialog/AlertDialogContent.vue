<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert-dialog/alert-dialog.css";
import { inject, onMounted, ref } from "vue";

interface Props {
  size?: "default" | "sm";
}

const props = withDefaults(defineProps<Props>(), { size: "default" });

const ctx = inject<{ isOpen: boolean; close: () => void }>("alert-dialog");

// Teleport only after mount: SSR cannot render into <body>, so hydrating it mismatches.
const mounted = ref(false);
onMounted(() => (mounted.value = true));
</script>

<template>
  <Teleport v-if="mounted" to="body">
    <template v-if="ctx?.isOpen">
      <div
        data-slot="alert-dialog-overlay"
        data-open
        :class="styles.backdrop"
      />
      <div
        data-slot="alert-dialog-content"
        data-open
        :data-size="props.size"
        :class="styles.popup"
        role="alertdialog"
        aria-modal="true"
      >
        <slot />
      </div>
    </template>
  </Teleport>
</template>
