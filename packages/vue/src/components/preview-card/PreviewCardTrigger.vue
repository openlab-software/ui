<script setup lang="ts">
import * as styles from "@openlab-ui/core/preview-card/preview-card.css";
import { inject } from "vue";

const ctx = inject<{ show: () => void; hide: () => void }>("preview-card");
</script>

<template>
  <div
    :class="styles.root"
    style="display: contents"
    @mouseenter="ctx?.show()"
    @mouseleave="ctx?.hide()"
    @focus="ctx?.show()"
    @blur="ctx?.hide()"
  >
    <slot />
  </div>
</template>
