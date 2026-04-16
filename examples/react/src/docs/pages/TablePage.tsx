import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Badge,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "R$ 250,00" },
  { id: "INV-002", status: "Pending", method: "Bank Transfer", amount: "R$ 150,00" },
  { id: "INV-003", status: "Paid", method: "PIX", amount: "R$ 350,00" },
  { id: "INV-004", status: "Failed", method: "Credit Card", amount: "R$ 450,00" },
];

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Paid: "default",
  Pending: "secondary",
  Failed: "destructive",
};

export function TablePage() {
  return (
    <Page
      title="Table"
      description="A responsive table component for displaying structured data."
    >
      <Section
        title="Basic"
        column
        preview={
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell style={{ fontWeight: 500 }}>{inv.id}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[inv.status]}>{inv.status}</Badge>
                  </TableCell>
                  <TableCell>{inv.method}</TableCell>
                  <TableCell style={{ textAlign: "right" }}>{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
        code={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@openlab-ui/react";

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>R$ 250,00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />
    </Page>
  );
}
