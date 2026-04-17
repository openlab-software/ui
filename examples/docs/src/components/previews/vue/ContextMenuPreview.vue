<script setup lang="ts">
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuLabel, ContextMenuGroup, ContextMenuShortcut } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <ContextMenu>
      <div style="display: flex; align-items: center; justify-content: center; height: 120px; width: 280px; border: 1px dashed var(--color-border); border-radius: 8px; font-size: 0.875rem; color: var(--color-muted-foreground); user-select: none">
        Right-click here
      </div>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuItem>Open <ContextMenuShortcut>↵</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem>Copy link <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </VuePreviewProvider>
</template>
