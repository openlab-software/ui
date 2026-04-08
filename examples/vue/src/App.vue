<script setup lang="ts">
import "@openlab-ui/vue/styles.css";
import { Button, OpenLabUIProvider } from "@openlab-ui/vue";
</script>

<template>
    <OpenLabUIProvider>
        <Button primary>Eu sou um botão Vue.js</Button>
    </OpenLabUIProvider>
</template>
