import { Button } from "@openlab-ui/react";
import { Page, Section } from "../Section";
import { PlusIcon, ArrowRightIcon } from "lucide-react";

export function ButtonPage() {
  return (
    <Page
      title="Button"
      description="Triggers an action or event, such as submitting a form or opening a dialog."
    >
      <Section
        title="Variants"
        preview={
          <>
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </>
        }
        code={`import { Button } from "@openlab-ui/react";

<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
      />

      <Section
        title="Sizes"
        preview={
          <>
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </>
        }
        code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
      />

      <Section
        title="Icon Buttons"
        preview={
          <>
            <Button size="icon-sm" variant="outline"><PlusIcon /></Button>
            <Button size="icon" variant="outline"><PlusIcon /></Button>
            <Button size="icon-lg" variant="outline"><PlusIcon /></Button>
          </>
        }
        code={`import { PlusIcon } from "lucide-react";

<Button size="icon-sm" variant="outline"><PlusIcon /></Button>
<Button size="icon" variant="outline"><PlusIcon /></Button>
<Button size="icon-lg" variant="outline"><PlusIcon /></Button>`}
      />

      <Section
        title="With Icons"
        preview={
          <>
            <Button>
              <PlusIcon data-icon="inline-start" />
              Add item
            </Button>
            <Button variant="outline">
              Continue
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </>
        }
        code={`import { PlusIcon, ArrowRightIcon } from "lucide-react";

<Button>
  <PlusIcon data-icon="inline-start" />
  Add item
</Button>
<Button variant="outline">
  Continue
  <ArrowRightIcon data-icon="inline-end" />
</Button>`}
      />

      <Section
        title="Disabled"
        preview={
          <>
            <Button disabled>Default</Button>
            <Button disabled variant="secondary">Secondary</Button>
            <Button disabled variant="outline">Outline</Button>
          </>
        }
        code={`<Button disabled>Default</Button>
<Button disabled variant="secondary">Secondary</Button>
<Button disabled variant="outline">Outline</Button>`}
      />
    </Page>
  );
}
