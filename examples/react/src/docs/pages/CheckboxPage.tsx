import {
  Checkbox,
  CheckboxGroup,
  Field,
  FieldLabel,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function CheckboxPage() {
  return (
    <Page
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <Section
        title="Basic"
        preview={
          <>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
              <Checkbox defaultChecked />
              Accept terms and conditions
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
              <Checkbox />
              Subscribe to newsletter
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
              <Checkbox disabled />
              Disabled option
            </label>
          </>
        }
        code={`import { Checkbox } from "@openlab-ui/react";

<label>
  <Checkbox defaultChecked />
  Accept terms and conditions
</label>

<label>
  <Checkbox disabled />
  Disabled option
</label>`}
      />

      <Section
        title="Checkbox Group"
        description="Group multiple checkboxes together."
        column
        preview={
          <CheckboxGroup>
            <Field orientation="horizontal">
              <Checkbox id="chk-a" value="notifications" />
              <FieldLabel htmlFor="chk-a">Email notifications</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="chk-b" value="marketing" defaultChecked />
              <FieldLabel htmlFor="chk-b">Marketing emails</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="chk-c" value="updates" />
              <FieldLabel htmlFor="chk-c">Product updates</FieldLabel>
            </Field>
          </CheckboxGroup>
        }
        code={`import { CheckboxGroup, Checkbox, Field, FieldLabel } from "@openlab-ui/react";

<CheckboxGroup>
  <Field orientation="horizontal">
    <Checkbox id="chk-a" value="notifications" />
    <FieldLabel htmlFor="chk-a">Email notifications</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <Checkbox id="chk-b" value="marketing" defaultChecked />
    <FieldLabel htmlFor="chk-b">Marketing emails</FieldLabel>
  </Field>
</CheckboxGroup>`}
      />
    </Page>
  );
}
