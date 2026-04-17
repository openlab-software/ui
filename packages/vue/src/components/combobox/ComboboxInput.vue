<script setup lang="ts">
import * as styles from "@openlab-ui/core/combobox/combobox.css";
import { inject } from "vue";

const ctx = inject<{
  inputValue: string;
  setInputValue: (v: string) => void;
  toggle: () => void;
}>("combobox");
</script>

<template>
  <input
    type="text"
    role="combobox"
    :class="styles.input"
    :value="ctx?.inputValue"
    @input="ctx?.setInputValue(($event.target as HTMLInputElement).value)"
    @click="ctx?.toggle()"
  />
</template>
