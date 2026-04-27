<script setup lang="ts">
import * as styles from "@openlab-ui/core/theme/default.css";

const props = withDefaults(defineProps<{ dark?: boolean }>(), { dark: false });
</script>

<template>
    <div :class="props.dark ? styles.darkTheme : styles.defaultTheme">
        <slot />
    </div>
</template>
