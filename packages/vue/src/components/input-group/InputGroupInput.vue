<script setup lang="ts">
import * as inputStyles from "@openlab-ui/core/input/input.css";
import * as styles from "@openlab-ui/core/input-group/input-group.css";
</script>

<template>
  <input data-slot="input-group-control" :class="[inputStyles.root, styles.control]" />
</template>
