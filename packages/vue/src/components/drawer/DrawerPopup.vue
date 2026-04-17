<script setup lang="ts">
import * as styles from "@openlab-ui/core/drawer/drawer.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean; close: () => void }>("drawer");
</script>

<template>
  <Teleport to="body">
    <template v-if="ctx?.isOpen">
      <div
        data-slot="drawer-overlay"
        :class="styles.overlay"
        @click="ctx?.close()"
      />
      <div
        data-slot="drawer-popup"
        :class="styles.popup"
      >
        <slot />
      </div>
    </template>
  </Teleport>
</template>
