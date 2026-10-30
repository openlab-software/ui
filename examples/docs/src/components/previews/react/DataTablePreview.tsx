import { DataTable } from "@openlab-ui/react";
import type { ColumnDef } from "@tanstack/react-table";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

type Payment = { id: string; status: string; email: string; amount: string };

const data: Payment[] = [
  { id: "p1", status: "Success", email: "ken@example.com", amount: "$316.00" },
  { id: "p2", status: "Processing", email: "abe@example.com", amount: "$242.00" },
  { id: "p3", status: "Failed", email: "monserrat@example.com", amount: "$837.00" },
];

const columns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "amount", header: "Amount" },
];

export function DataTableBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%" }}>
        <DataTable columns={columns} data={data} />
      </div>
    </ReactPreviewProvider>
  );
}
