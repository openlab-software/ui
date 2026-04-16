import { Badge } from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function BadgePage() {
  return (
    <Page
      title="Badge"
      description="A small label used to highlight status, category, or metadata."
    >
      <Section
        title="Variants"
        preview={
          <>
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </>
        }
        code={`import { Badge } from "@openlab-ui/react";

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
      />

      <Section
        title="Usage"
        description="Badges work well alongside text or as status indicators."
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem" }}>Notifications</span>
              <Badge>12</Badge>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem" }}>Order status</span>
              <Badge variant="secondary">Processing</Badge>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem" }}>Plan</span>
              <Badge variant="outline">Free</Badge>
            </div>
          </div>
        }
        code={`<Badge>12</Badge>
<Badge variant="secondary">Processing</Badge>
<Badge variant="outline">Free</Badge>`}
      />
    </Page>
  );
}
