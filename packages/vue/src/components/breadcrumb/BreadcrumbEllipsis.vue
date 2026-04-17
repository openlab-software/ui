<script setup lang="ts">
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";
</script>

<template>
  <span
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    :class="styles.ellipsis"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
    <span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0)">
      More
    </span>
  </span>
</template>
