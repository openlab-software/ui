<script setup lang="ts">
import * as styles from "@openlab-ui/core/theme/default.css";
import { computed, onBeforeUnmount, onMounted, watch } from "vue";

const props = withDefaults(defineProps<{ dark?: boolean }>(), { dark: false });

const theme = computed(() => (props.dark ? styles.darkTheme : styles.defaultTheme));

// Teleported content (dialogs, drawers, menus) renders in <body>, outside the wrapper,
// so the theme class must also live on <body> for its CSS variables to resolve.
watch(theme, (next, prev) => {
  document.body.classList.remove(prev);
  document.body.classList.add(next);
});
onMounted(() => document.body.classList.add(theme.value));
onBeforeUnmount(() => document.body.classList.remove(theme.value));
</script>

<template>
    <div :class="theme">
        <slot />
    </div>
</template>
