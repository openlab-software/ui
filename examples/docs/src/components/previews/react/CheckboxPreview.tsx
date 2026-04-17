import { Checkbox, Label, Field } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function CheckboxBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Field orientation="horizontal">
          <Checkbox id="terms" defaultChecked />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled">Disabled option</Label>
        </Field>
      </div>
    </ReactPreviewProvider>
  );
}
