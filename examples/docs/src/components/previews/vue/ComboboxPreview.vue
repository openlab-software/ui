<script setup lang="ts">
import { ComboboxRoot, ComboboxInput, ComboboxPopup, ComboboxList, ComboboxItem, ComboboxEmpty } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const fruits = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango", "Orange", "Peach", "Pear", "Strawberry"];
</script>

<template>
  <VuePreviewProvider>
    <ComboboxRoot>
      <ComboboxInput placeholder="Search fruits…" style="width: 240px" />
      <ComboboxPopup>
        <ComboboxList>
          <ComboboxItem v-for="fruit in fruits" :key="fruit" :value="fruit">{{ fruit }}</ComboboxItem>
          <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        </ComboboxList>
      </ComboboxPopup>
    </ComboboxRoot>
  </VuePreviewProvider>
</template>
