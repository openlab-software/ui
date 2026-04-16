import {
  Input,
  Textarea,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Button,
} from "@openlab-ui/react";
import { SearchIcon } from "lucide-react";
import { Page, Section } from "../Section";

export function InputPage() {
  return (
    <Page
      title="Input"
      description="Text input fields and form controls for collecting user data."
    >
      <Section
        title="Basic Input"
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: 360 }}>
            <Input placeholder="Enter your name..." />
            <Input type="email" placeholder="email@example.com" />
            <Input type="password" placeholder="Password" />
            <Input disabled placeholder="Disabled input" />
          </div>
        }
        code={`import { Input } from "@openlab-ui/react";

<Input placeholder="Enter your name..." />
<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />`}
      />

      <Section
        title="With Field"
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: 360 }}>
            <Field>
              <FieldLabel htmlFor="name-field">Full name</FieldLabel>
              <Input id="name-field" placeholder="John Doe" />
              <FieldDescription>Enter your legal name.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="email-field">Email</FieldLabel>
              <Input id="email-field" type="email" aria-invalid="true" />
              <FieldError>Please enter a valid email address.</FieldError>
            </Field>
          </div>
        }
        code={`import { Field, FieldLabel, FieldDescription, FieldError, Input } from "@openlab-ui/react";

<Field>
  <FieldLabel htmlFor="name-field">Full name</FieldLabel>
  <Input id="name-field" placeholder="John Doe" />
  <FieldDescription>Enter your legal name.</FieldDescription>
</Field>

<Field>
  <FieldLabel htmlFor="email-field">Email</FieldLabel>
  <Input id="email-field" type="email" aria-invalid="true" />
  <FieldError>Please enter a valid email address.</FieldError>
</Field>`}
      />

      <Section
        title="Input Group"
        description="Combine inputs with addons for prefix/suffix decoration."
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%", maxWidth: 360 }}>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="your-site.com" />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>
                <SearchIcon style={{ width: "1rem", height: "1rem" }} />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>

            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <Button size="sm">Go</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        }
        code={`import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@openlab-ui/react";

<InputGroup>
  <InputGroupAddon>
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="your-site.com" />
</InputGroup>

<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <Button size="sm">Go</Button>
  </InputGroupAddon>
</InputGroup>`}
      />

      <Section
        title="Textarea"
        preview={
          <Textarea
            placeholder="Write your message here..."
            rows={4}
            style={{ width: "100%", maxWidth: 400 }}
          />
        }
        code={`import { Textarea } from "@openlab-ui/react";

<Textarea placeholder="Write your message here..." rows={4} />`}
      />

      <Section
        title="Field Group"
        description="Group multiple fields together with consistent spacing."
        column
        preview={
          <FieldGroup style={{ maxWidth: 360 }}>
            <Field>
              <FieldLabel htmlFor="fg-first">First name</FieldLabel>
              <Input id="fg-first" placeholder="John" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fg-last">Last name</FieldLabel>
              <Input id="fg-last" placeholder="Doe" />
            </Field>
          </FieldGroup>
        }
        code={`import { FieldGroup, Field, FieldLabel, Input } from "@openlab-ui/react";

<FieldGroup>
  <Field>
    <FieldLabel htmlFor="first">First name</FieldLabel>
    <Input id="first" placeholder="John" />
  </Field>
  <Field>
    <FieldLabel htmlFor="last">Last name</FieldLabel>
    <Input id="last" placeholder="Doe" />
  </Field>
</FieldGroup>`}
      />
    </Page>
  );
}
