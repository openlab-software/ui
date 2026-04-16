import {
  Spinner,
  Skeleton,
  Separator,
  Kbd,
  KbdGroup,
  Label,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Collapsible,
  ScrollArea,
  NumberFieldRoot,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
} from "@openlab-ui/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Page, Section } from "../Section";

const tags = Array.from({ length: 20 }, (_, i) => `Tag ${i + 1}`);

export function MiscPage() {
  return (
    <Page
      title="Utilities"
      description="Supplementary components for UI composition."
    >
      <Section
        title="Spinner"
        description="Indicates a loading state."
        preview={
          <>
            <Spinner style={{ width: "1rem", height: "1rem" }} />
            <Spinner style={{ width: "1.5rem", height: "1.5rem" }} />
            <Spinner style={{ width: "2rem", height: "2rem" }} />
          </>
        }
        code={`import { Spinner } from "@openlab-ui/react";

<Spinner />`}
      />

      <Section
        title="Skeleton"
        description="Placeholder content while data is loading."
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: 300 }}>
            <Skeleton style={{ height: "1.25rem", width: "60%" }} />
            <Skeleton style={{ height: "1rem", width: "100%" }} />
            <Skeleton style={{ height: "1rem", width: "90%" }} />
            <Skeleton style={{ height: "1rem", width: "80%" }} />
          </div>
        }
        code={`import { Skeleton } from "@openlab-ui/react";

<Skeleton style={{ height: "1.25rem", width: "60%" }} />
<Skeleton style={{ height: "1rem", width: "100%" }} />
<Skeleton style={{ height: "1rem", width: "90%" }} />`}
      />

      <Section
        title="Separator"
        column
        preview={
          <div style={{ width: "100%", maxWidth: 360 }}>
            <div style={{ fontSize: "0.875rem", padding: "0.5rem 0" }}>Above</div>
            <Separator />
            <div style={{ fontSize: "0.875rem", padding: "0.5rem 0" }}>Below</div>
          </div>
        }
        code={`import { Separator } from "@openlab-ui/react";

<Separator />`}
      />

      <Section
        title="Kbd"
        description="Renders keyboard shortcut labels."
        preview={
          <>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </>
        }
        code={`import { Kbd, KbdGroup } from "@openlab-ui/react";

<Kbd>⌘</Kbd>
<Kbd>K</Kbd>

<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
</KbdGroup>`}
      />

      <Section
        title="Label"
        preview={
          <Label htmlFor="lbl-demo">Email address</Label>
        }
        code={`import { Label } from "@openlab-ui/react";

<Label htmlFor="email">Email address</Label>
<input id="email" type="email" />`}
      />

      <Section
        title="Toggle"
        preview={
          <>
            <Toggle>Bold</Toggle>
            <Toggle variant="outline">Italic</Toggle>
            <Toggle defaultPressed>
              <BoldIcon style={{ width: "1rem", height: "1rem" }} />
            </Toggle>
          </>
        }
        code={`import { Toggle } from "@openlab-ui/react";

<Toggle>Bold</Toggle>
<Toggle variant="outline">Italic</Toggle>
<Toggle defaultPressed><BoldIcon /></Toggle>`}
      />

      <Section
        title="Toggle Group"
        preview={
          <ToggleGroup>
            <ToggleGroupItem value="bold">
              <BoldIcon style={{ width: "1rem", height: "1rem" }} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <ItalicIcon style={{ width: "1rem", height: "1rem" }} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <UnderlineIcon style={{ width: "1rem", height: "1rem" }} />
            </ToggleGroupItem>
          </ToggleGroup>
        }
        code={`import { ToggleGroup, ToggleGroupItem } from "@openlab-ui/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

<ToggleGroup>
  <ToggleGroupItem value="bold"><BoldIcon /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><ItalicIcon /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><UnderlineIcon /></ToggleGroupItem>
</ToggleGroup>`}
      />

      <Section
        title="Breadcrumb"
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbSeparator, BreadcrumbPage } from "@openlab-ui/react";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <Section
        title="Collapsible"
        column
        preview={
          <Collapsible.Root style={{ width: "100%", maxWidth: 360 }}>
            <Collapsible.Trigger style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "0.5rem 0",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 500,
              background: "none",
              border: "none",
              color: "var(--color-foreground)",
            }}>
              Toggle content
            </Collapsible.Trigger>
            <Collapsible.Panel>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", padding: "0.5rem 0" }}>
                This content is hidden by default and shown when the trigger is clicked.
              </p>
            </Collapsible.Panel>
          </Collapsible.Root>
        }
        code={`import { Collapsible } from "@openlab-ui/react";

<Collapsible.Root>
  <Collapsible.Trigger>Toggle content</Collapsible.Trigger>
  <Collapsible.Panel>
    <p>This content is hidden by default.</p>
  </Collapsible.Panel>
</Collapsible.Root>`}
      />

      <Section
        title="Number Field"
        preview={
          <NumberFieldRoot defaultValue={10} min={0} max={100}>
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput style={{ width: "5rem", textAlign: "center" }} />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberFieldRoot>
        }
        code={`import { NumberFieldRoot, NumberFieldGroup, NumberFieldInput,
  NumberFieldIncrement, NumberFieldDecrement } from "@openlab-ui/react";

<NumberFieldRoot defaultValue={10} min={0} max={100}>
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberFieldRoot>`}
      />

      <Section
        title="Scroll Area"
        description="Custom scrollable container with styled scrollbars."
        preview={
          <ScrollArea style={{ height: 200, width: 300, border: "1px solid var(--color-border)", borderRadius: "var(--radius-base)" }}>
            <div style={{ padding: "0.75rem" }}>
              {tags.map((tag) => (
                <div key={tag} style={{ padding: "0.375rem 0", fontSize: "0.875rem", borderBottom: "1px solid var(--color-border)" }}>
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`import { ScrollArea } from "@openlab-ui/react";

<ScrollArea style={{ height: 200, width: 300 }}>
  {items.map(item => (
    <div key={item}>{item}</div>
  ))}
</ScrollArea>`}
      />
    </Page>
  );
}
