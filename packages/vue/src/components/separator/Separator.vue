<script setup lang="ts">
import * as styles from "@openlab-ui/core/separator/separator.css";

interface Props {
  orientation?: "horizontal" | "vertical";
}

withDefaults(defineProps<Props>(), { orientation: "horizontal" });
</script>

<template>
  <div
    role="separator"
    :class="styles.root"
  />
</template>
