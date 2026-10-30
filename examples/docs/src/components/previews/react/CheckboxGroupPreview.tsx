import { Checkbox, CheckboxGroup, Field, Label } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

const ITEMS = ["Apple", "Banana", "Cherry"];

export function CheckboxGroupBasic() {
  return (
    <ReactPreviewProvider>
      <CheckboxGroup defaultValue={["Apple"]}>
        {ITEMS.map((item) => (
          <Field key={item} orientation="horizontal">
            <Checkbox id={`cg-${item}`} value={item} />
            <Label htmlFor={`cg-${item}`}>{item}</Label>
          </Field>
        ))}
      </CheckboxGroup>
    </ReactPreviewProvider>
  );
}
