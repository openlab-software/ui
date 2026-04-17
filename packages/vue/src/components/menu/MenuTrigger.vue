<script setup lang="ts">
import * as styles from "@openlab-ui/core/menu/menu.css";
import { inject } from "vue";

const ctx = inject<{ toggle: () => void }>("menu");
</script>

<template>
  <button
    type="button"
    :class="styles.root"
    :aria-haspopup="true"
    @click="ctx?.toggle()"
  >
    <slot />
  </button>
</template>
