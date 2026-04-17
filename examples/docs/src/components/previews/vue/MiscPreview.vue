<script setup lang="ts">
import {
  Kbd,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%">
      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap">
        <Kbd>⌘</Kbd>
        <Kbd>⌘K</Kbd>
        <span style="font-size: 0.875rem">or</span>
        <Kbd>Ctrl</Kbd>
        <span style="font-size: 0.875rem">+</span>
        <Kbd>K</Kbd>
      </div>

      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
        <Toggle>Bold</Toggle>
        <Toggle :pressed="true">Italic</Toggle>
        <Toggle variant="outline">Underline</Toggle>
      </div>

      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic">I</ToggleGroupItem>
        <ToggleGroupItem value="underline">U</ToggleGroupItem>
      </ToggleGroup>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </VuePreviewProvider>
</template>
