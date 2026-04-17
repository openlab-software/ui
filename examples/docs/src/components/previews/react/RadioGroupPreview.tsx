import { RadioGroup, Radio, Label, Field } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function RadioGroupBasic() {
  return (
    <ReactPreviewProvider>
      <RadioGroup defaultValue="option-1">
        <Field orientation="horizontal">
          <Radio value="option-1" id="r1" />
          <Label htmlFor="r1">Option one</Label>
        </Field>
        <Field orientation="horizontal">
          <Radio value="option-2" id="r2" />
          <Label htmlFor="r2">Option two</Label>
        </Field>
        <Field orientation="horizontal">
          <Radio value="option-3" id="r3" disabled />
          <Label htmlFor="r3">Option three (disabled)</Label>
        </Field>
      </RadioGroup>
    </ReactPreviewProvider>
  );
}
