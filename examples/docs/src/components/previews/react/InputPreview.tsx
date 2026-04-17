import { Input, Textarea, Label, Field } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function InputBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Field>
          <Label>Email</Label>
          <Input type="email" placeholder="you@example.com" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" placeholder="••••••••" />
        </Field>
      </div>
    </ReactPreviewProvider>
  );
}

export function InputTextarea() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <Field>
          <Label>Message</Label>
          <Textarea placeholder="Type your message…" rows={4} />
        </Field>
      </div>
    </ReactPreviewProvider>
  );
}

export function InputDisabled() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input disabled placeholder="Disabled input" />
        <Textarea disabled placeholder="Disabled textarea" rows={3} />
      </div>
    </ReactPreviewProvider>
  );
}
