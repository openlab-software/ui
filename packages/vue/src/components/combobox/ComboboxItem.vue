<script setup lang="ts">
import * as styles from "@openlab-ui/core/combobox/combobox.css";
import { inject } from "vue";

interface Props {
  value: string;
}

defineProps<Props>();
const ctx = inject<{ close: () => void }>("combobox");
</script>

<template>
  <li role="option" :class="styles.item" @click="ctx?.close()">
    <slot />
  </li>
</template>
