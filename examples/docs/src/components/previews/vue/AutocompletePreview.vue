<script setup lang="ts">
import {
  AutocompleteRoot, AutocompleteInput, AutocompletePopup, AutocompleteListbox, AutocompleteItem,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const frameworks = ["React", "Vue", "Svelte", "Solid", "Angular", "Astro"];
</script>

<template>
  <VuePreviewProvider>
    <AutocompleteRoot>
      <AutocompleteInput placeholder="Search frameworks..." />
      <AutocompletePopup>
        <AutocompleteListbox>
          <AutocompleteItem v-for="f in frameworks" :key="f">{{ f }}</AutocompleteItem>
        </AutocompleteListbox>
      </AutocompletePopup>
    </AutocompleteRoot>
  </VuePreviewProvider>
</template>
