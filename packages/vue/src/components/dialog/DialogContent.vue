<script setup lang="ts">
import * as styles from "@openlab-ui/core/dialog/dialog.css";
import { inject } from "vue";

interface Props {
  showCloseButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), { showCloseButton: true });

const ctx = inject<{ isOpen: boolean; close: () => void }>("dialog");
</script>

<template>
  <Teleport to="body">
    <template v-if="ctx?.isOpen">
      <div
        data-slot="dialog-overlay"
        data-open
        :class="styles.backdrop"
        @click="ctx?.close()"
      />
      <div
        data-slot="dialog-content"
        data-open
        :class="styles.popup"
        role="dialog"
        aria-modal="true"
      >
        <slot />
        <button
          v-if="props.showCloseButton"
          type="button"
          data-slot="dialog-close"
          :class="styles.close"
          aria-label="Close"
          @click="ctx?.close()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </template>
  </Teleport>
</template>
