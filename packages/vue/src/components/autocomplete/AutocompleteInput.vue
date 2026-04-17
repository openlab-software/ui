<script setup lang="ts">
import * as styles from "@openlab-ui/core/autocomplete/autocomplete.css";
import { inject } from "vue";

const ctx = inject<{
  inputValue: string;
  setInputValue: (v: string) => void;
}>("autocomplete");
</script>

<template>
  <input
    type="text"
    :class="styles.input"
    :value="ctx?.inputValue"
    @input="ctx?.setInputValue(($event.target as HTMLInputElement).value)"
  />
</template>
