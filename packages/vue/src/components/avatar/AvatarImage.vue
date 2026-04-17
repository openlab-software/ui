<script setup lang="ts">
import * as styles from "@openlab-ui/core/avatar/avatar.css";
import { ref } from "vue";

const loaded = ref(false);
const failed = ref(false);
</script>

<template>
  <img
    data-slot="avatar-image"
    :class="styles.image"
    :style="failed ? 'display: none' : undefined"
    @load="loaded = true"
    @error="failed = true"
  />
</template>
