<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert-dialog/alert-dialog.css";
import { inject } from "vue";

interface Props {
  size?: "default" | "sm";
}

const props = withDefaults(defineProps<Props>(), { size: "default" });

const ctx = inject<{ isOpen: boolean; close: () => void }>("alert-dialog");
</script>

<template>
  <Teleport to="body">
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
