<script setup lang="ts">
import "@patrick-ui/vue/styles.css";
import { Button, PatrickUIProvider } from "@patrick-ui/vue";
</script>

<template>
    <PatrickUIProvider>
        <Button primary>Eu sou um botão Vue.js</Button>
    </PatrickUIProvider>
</template>
