<script setup lang="ts">
import * as styles from "@openlab-ui/core/combobox/combobox.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean }>("combobox");
</script>

<template>
  <div
    v-if="ctx?.isOpen"
    :class="styles.popup"
    style="position: absolute; z-index: 50; top: 100%; left: 0; min-width: 100%"
  >
    <slot />
  </div>
</template>
