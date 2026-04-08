<script setup lang="ts">
import { computed } from "vue";
import * as inputStyles from "@openlab-ui/core/input/input.css";

const className = computed(() => inputStyles.root);
</script>

<template>
    <input :class="className" />
</template>
