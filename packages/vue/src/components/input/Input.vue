<script setup lang="ts">
import { computed } from 'vue'
import * as inputStyles from '@patrick-ui/core/input/input.css'

const className = computed(() => inputStyles.root)
</script>

<template>
    <input :class="className" />
</template>