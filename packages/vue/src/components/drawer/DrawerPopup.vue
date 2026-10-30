<script setup lang="ts">
import * as styles from "@openlab-ui/core/drawer/drawer.css";
import { inject, onMounted, ref } from "vue";

interface Props {
  side?: "top" | "right" | "bottom" | "left";
}

const props = withDefaults(defineProps<Props>(), { side: "right" });

const ctx = inject<{ isOpen: boolean; close: () => void }>("drawer");

// Teleport only after mount: SSR cannot render into <body>, so hydrating it mismatches.
const mounted = ref(false);
onMounted(() => (mounted.value = true));
</script>

<template>
  <Teleport v-if="mounted" to="body">
    <template v-if="ctx?.isOpen">
      <div
        data-slot="drawer-overlay"
        :class="styles.overlay"
        @click="ctx?.close()"
      />
      <div
        data-slot="drawer-popup"
        data-open
        :data-side="props.side"
        :class="styles.popup"
        role="dialog"
        aria-modal="true"
      >
        <slot />
      </div>
    </template>
  </Teleport>
</template>
