<script setup lang="ts">
import * as styles from "@openlab-ui/core/menu/menu.css";
import { inject } from "vue";

const ctx = inject<{ close: () => void }>("menu");
</script>

<template>
  <div
    role="menuitem"
    :class="styles.item"
    tabindex="-1"
    @click="ctx?.close()"
  >
    <slot />
  </div>
</template>
