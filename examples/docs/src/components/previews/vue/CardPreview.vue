<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Button,
  Badge,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <Card style="width: 100%; max-width: 360px">
      <CardHeader>
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>Manage your billing and subscription.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style="font-size: 0.875rem; color: var(--color-muted-foreground)">
          You are currently on the <strong>Pro</strong> plan.
        </p>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button variant="outline" size="sm">Cancel plan</Button>
          <Button size="sm">Upgrade</Button>
        </CardAction>
      </CardFooter>
    </Card>
  </VuePreviewProvider>
</template>
