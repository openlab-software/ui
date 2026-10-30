import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, Input } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function FieldBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="you@example.com" />
          <FieldDescription>We will never share your email.</FieldDescription>
        </Field>
      </div>
    </ReactPreviewProvider>
  );
}

export function FieldGrouped() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <FieldSet>
          <FieldLegend>Account</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Input placeholder="openlab" />
            </Field>
            <Field invalid>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" />
              <FieldError match>Password must be at least 8 characters.</FieldError>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </ReactPreviewProvider>
  );
}
