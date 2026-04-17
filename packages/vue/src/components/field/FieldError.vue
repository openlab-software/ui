<script setup lang="ts">
import * as styles from "@openlab-ui/core/field/field.css";
import { computed } from "vue";

interface ErrorItem {
  message?: string;
}

interface Props {
  errors?: Array<ErrorItem | undefined>;
}

const props = defineProps<Props>();

const content = computed(() => {
  if (!props.errors?.length) return null;
  const unique = [...new Map(props.errors.map((e) => [e?.message, e])).values()];
  return unique.filter((e): e is ErrorItem => !!e?.message);
});
</script>

<template>
  <div
    v-if="$slots.default || (content && content.length)"
    role="alert"
    data-slot="field-error"
    :class="styles.fieldError"
  >
    <slot>
      <template v-if="content && content.length === 1">
        {{ content[0]?.message }}
      </template>
      <ul
        v-else-if="content && content.length > 1"
        style="margin-left: 1rem; display: flex; flex-direction: column; gap: 0.25rem; list-style: disc"
      >
        <li v-for="(e, i) in content" :key="i">{{ e?.message }}</li>
      </ul>
    </slot>
  </div>
</template>
