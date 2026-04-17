<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <Tabs default-value="account" style="width: 100%; max-width: 480px">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style="font-size: 0.875rem; color: var(--color-muted-foreground); padding: 1rem 0">
          Manage your account settings and preferences.
        </p>
      </TabsContent>
      <TabsContent value="security">
        <p style="font-size: 0.875rem; color: var(--color-muted-foreground); padding: 1rem 0">
          Configure two-factor authentication and password policies.
        </p>
      </TabsContent>
      <TabsContent value="notifications">
        <p style="font-size: 0.875rem; color: var(--color-muted-foreground); padding: 1rem 0">
          Choose what notifications you receive and how.
        </p>
      </TabsContent>
    </Tabs>
  </VuePreviewProvider>
</template>
