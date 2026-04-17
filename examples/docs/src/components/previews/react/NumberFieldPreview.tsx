import { NumberField, Label, Field } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function NumberFieldBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: 280 }}>
        <Field>
          <Label>Quantity</Label>
          <NumberField.Root defaultValue={1} min={0} max={99}>
            <NumberField.Group>
              <NumberField.Decrement>−</NumberField.Decrement>
              <NumberField.Input />
              <NumberField.Increment>+</NumberField.Increment>
            </NumberField.Group>
          </NumberField.Root>
        </Field>
        <Field>
          <Label>Price (disabled)</Label>
          <NumberField.Root defaultValue={42} disabled>
            <NumberField.Group>
              <NumberField.Decrement>−</NumberField.Decrement>
              <NumberField.Input />
              <NumberField.Increment>+</NumberField.Increment>
            </NumberField.Group>
          </NumberField.Root>
        </Field>
      </div>
    </ReactPreviewProvider>
  );
}
