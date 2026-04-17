<script setup lang="ts">
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";
</script>

<template>
  <span
    data-slot="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="styles.page"
  >
    <slot />
  </span>
</template>
