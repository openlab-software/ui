<script setup lang="ts">
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Badge,
} from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "Bank Transfer", amount: "$150.00" },
  { id: "INV-003", status: "Paid", method: "PayPal", amount: "$350.00" },
  { id: "INV-004", status: "Unpaid", method: "Credit Card", amount: "$450.00" },
] as const;
</script>

<template>
  <VuePreviewProvider>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead style="text-align: right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="inv in invoices" :key="inv.id">
          <TableCell style="font-weight: 500">{{ inv.id }}</TableCell>
          <TableCell>
            <Badge
              :variant="inv.status === 'Paid' ? 'default' : inv.status === 'Pending' ? 'secondary' : 'destructive'"
            >{{ inv.status }}</Badge>
          </TableCell>
          <TableCell>{{ inv.method }}</TableCell>
          <TableCell style="text-align: right">{{ inv.amount }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </VuePreviewProvider>
</template>
