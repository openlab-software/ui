<script setup lang="ts">
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Button,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <DrawerRoot>
      <DrawerTrigger>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerTitle>Shopping Cart</DrawerTitle>
        <DrawerDescription>Review your items before checkout.</DrawerDescription>
        <div style="padding: 1rem 0; flex: 1">
          <p style="font-size: 0.875rem; color: var(--color-muted-foreground)">
            Your cart is empty.
          </p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 1.5rem; justify-content: flex-end">
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Checkout</Button>
        </div>
      </DrawerPopup>
    </DrawerRoot>
  </VuePreviewProvider>
</template>
