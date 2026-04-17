<script setup lang="ts">
import * as styles from "@openlab-ui/core/autocomplete/autocomplete.css";
import { inject } from "vue";

const ctx = inject<{ close: () => void }>("autocomplete");
</script>

<template>
  <li role="option" :class="styles.item" @click="ctx?.close()">
    <slot />
  </li>
</template>
