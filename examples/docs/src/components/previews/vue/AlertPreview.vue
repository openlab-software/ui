<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from "@openlab-ui/vue";
</script>

<template>
  <div style="width: 100%; display: flex; flex-direction: column; gap: 0.75rem">
    <Alert>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        This is a default alert with some information for the user.
      </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  </div>
</template>
