<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <VuePreviewProvider>
    <Select v-model="value">
      <SelectTrigger style="width: 200px" placeholder="Select a fruit…" />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </VuePreviewProvider>
</template>
