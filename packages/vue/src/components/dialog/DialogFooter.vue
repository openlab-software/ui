<script setup lang="ts">
import * as styles from "@openlab-ui/core/dialog/dialog.css";

interface Props {
  showCloseButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), { showCloseButton: false });

import { inject } from "vue";
const ctx = inject<{ close: () => void }>("dialog");
</script>

<template>
  <div data-slot="dialog-footer" :class="styles.footer">
    <slot />
    <button
      v-if="props.showCloseButton"
      type="button"
      @click="ctx?.close()"
    >
      Close
    </button>
  </div>
</template>
