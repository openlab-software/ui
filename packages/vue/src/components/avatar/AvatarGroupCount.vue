<script setup lang="ts">
import * as styles from "@openlab-ui/core/avatar/avatar.css";
</script>

<template>
  <div data-slot="avatar-group-count" :class="styles.groupCount">
    <slot />
  </div>
</template>
