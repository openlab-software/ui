import {
  Button,
  Checkbox,
  Field,
  FieldLabel,
  Input,
  PatrickUIProvider,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@patrick-ui/react";
import "@patrick-ui/react/styles.css";
import { AccordionDemo } from "./accordion";
import DialogDemo from "./dialog";
import ContextMenuDemo from "./context-menu";

export default function App() {
  return (
    <PatrickUIProvider>
      <Button variant="secondary">Eu sou um botão React.js</Button>

      <AccordionDemo />
      <DialogDemo />
      <ContextMenuDemo />

      <Field>
        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
          Name on Card
        </FieldLabel>
        <Input
          id="checkout-7j9-card-name-43j"
          placeholder="Evil Rabbit"
          required
        />
      </Field>

      <label>
        <Checkbox />
        Olá
      </label>

      <Table>
        <TableCaption>Lista de pagamentos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pago</TableCell>
            <TableCell>R$ 100,00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pago</TableCell>
            <TableCell>R$ 100,00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pago</TableCell>
            <TableCell>R$ 100,00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PatrickUIProvider>
  );
}
