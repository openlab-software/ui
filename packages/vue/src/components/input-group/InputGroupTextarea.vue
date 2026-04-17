<script setup lang="ts">
import * as textareaStyles from "@openlab-ui/core/textarea/textarea.css";
import * as styles from "@openlab-ui/core/input-group/input-group.css";
</script>

<template>
  <textarea data-slot="input-group-control" :class="[textareaStyles.root, styles.control]" />
</template>
