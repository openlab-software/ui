<script setup lang="ts">
import {
  Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, Input,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const props = defineProps<{ section?: string }>();
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 360px">
      <Field v-if="!props.section || props.section === 'basic'">
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </Field>
      <FieldSet v-else>
        <FieldLegend>Account</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input placeholder="openlab" />
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input type="password" aria-invalid="true" />
            <FieldError>Password must be at least 8 characters.</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  </VuePreviewProvider>
</template>
