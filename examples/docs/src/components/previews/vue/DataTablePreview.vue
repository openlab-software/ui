<script setup lang="ts">
import { DataTable } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const columns = [
  { key: "status", header: "Status" },
  { key: "email", header: "Email" },
  { key: "amount", header: "Amount" },
];
const data = [
  { status: "Success", email: "ken@example.com", amount: "$316.00" },
  { status: "Processing", email: "abe@example.com", amount: "$242.00" },
  { status: "Failed", email: "monserrat@example.com", amount: "$837.00" },
];
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%">
      <DataTable :columns="columns" :data="data" />
    </div>
  </VuePreviewProvider>
</template>
