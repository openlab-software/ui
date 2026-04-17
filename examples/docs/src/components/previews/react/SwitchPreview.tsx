import { Switch, Label, Field } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function SwitchBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Field orientation="horizontal">
          <Switch id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable notifications</Label>
        </Field>
        <Field orientation="horizontal">
          <Switch id="emails" />
          <Label htmlFor="emails">Marketing emails</Label>
        </Field>
        <Field orientation="horizontal">
          <Switch id="sw-disabled" disabled />
          <Label htmlFor="sw-disabled">Disabled</Label>
        </Field>
      </div>
    </ReactPreviewProvider>
  );
}
