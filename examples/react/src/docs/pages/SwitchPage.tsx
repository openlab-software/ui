import { Switch, Field, FieldLabel } from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function SwitchPage() {
  return (
    <Page
      title="Switch"
      description="A toggle control that lets users turn a setting on or off."
    >
      <Section
        title="Basic"
        preview={
          <>
            <Switch defaultChecked />
            <Switch />
            <Switch disabled />
            <Switch defaultChecked disabled />
          </>
        }
        code={`import { Switch } from "@openlab-ui/react";

<Switch defaultChecked />
<Switch />
<Switch disabled />`}
      />

      <Section
        title="Sizes"
        preview={
          <>
            <Switch size="sm" defaultChecked />
            <Switch size="default" defaultChecked />
          </>
        }
        code={`<Switch size="sm" defaultChecked />
<Switch size="default" defaultChecked />`}
      />

      <Section
        title="With Label"
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Field orientation="horizontal" style={{ justifyContent: "space-between", maxWidth: 320 }}>
              <FieldLabel htmlFor="sw-notif">Email notifications</FieldLabel>
              <Switch id="sw-notif" defaultChecked />
            </Field>
            <Field orientation="horizontal" style={{ justifyContent: "space-between", maxWidth: 320 }}>
              <FieldLabel htmlFor="sw-mkt">Marketing emails</FieldLabel>
              <Switch id="sw-mkt" />
            </Field>
          </div>
        }
        code={`import { Switch, Field, FieldLabel } from "@openlab-ui/react";

<Field orientation="horizontal" style={{ justifyContent: "space-between" }}>
  <FieldLabel htmlFor="sw-notif">Email notifications</FieldLabel>
  <Switch id="sw-notif" defaultChecked />
</Field>`}
      />
    </Page>
  );
}
