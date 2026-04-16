import {
  RadioGroup,
  RadioGroupItem,
  Field,
  FieldLabel,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function RadioGroupPage() {
  return (
    <Page
      title="Radio Group"
      description="A set of checkable buttons — known as radio buttons — where only one can be checked at a time."
    >
      <Section
        title="Basic"
        column
        preview={
          <RadioGroup defaultValue="comfortable">
            <Field orientation="horizontal">
              <RadioGroupItem value="compact" id="r-compact" />
              <FieldLabel htmlFor="r-compact">Compact</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="comfortable" id="r-comfortable" />
              <FieldLabel htmlFor="r-comfortable">Comfortable</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="spacious" id="r-spacious" />
              <FieldLabel htmlFor="r-spacious">Spacious</FieldLabel>
            </Field>
          </RadioGroup>
        }
        code={`import { RadioGroup, RadioGroupItem, Field, FieldLabel } from "@openlab-ui/react";

<RadioGroup defaultValue="comfortable">
  <Field orientation="horizontal">
    <RadioGroupItem value="compact" id="r-compact" />
    <FieldLabel htmlFor="r-compact">Compact</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="comfortable" id="r-comfortable" />
    <FieldLabel htmlFor="r-comfortable">Comfortable</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="spacious" id="r-spacious" />
    <FieldLabel htmlFor="r-spacious">Spacious</FieldLabel>
  </Field>
</RadioGroup>`}
      />

      <Section
        title="Disabled Items"
        column
        preview={
          <RadioGroup defaultValue="a">
            <Field orientation="horizontal">
              <RadioGroupItem value="a" id="rad-a" />
              <FieldLabel htmlFor="rad-a">Option A</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="b" id="rad-b" disabled />
              <FieldLabel htmlFor="rad-b" style={{ opacity: 0.5 }}>Option B (disabled)</FieldLabel>
            </Field>
          </RadioGroup>
        }
        code={`<RadioGroup defaultValue="a">
  <Field orientation="horizontal">
    <RadioGroupItem value="a" id="rad-a" />
    <FieldLabel htmlFor="rad-a">Option A</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <RadioGroupItem value="b" id="rad-b" disabled />
    <FieldLabel htmlFor="rad-b">Option B (disabled)</FieldLabel>
  </Field>
</RadioGroup>`}
      />
    </Page>
  );
}
