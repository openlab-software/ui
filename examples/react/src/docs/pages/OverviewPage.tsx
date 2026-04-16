import {
  Button,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Separator,
} from "@openlab-ui/react";
import { Page } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function OverviewPage() {
  return (
    <Page
      title="OpenLab UI"
      description="A component library built on Base UI with vanilla-extract styling. Fully accessible, themeable, and framework-agnostic at the style layer."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <Card size="sm">
          <CardHeader>
            <CardTitle>Accessible</CardTitle>
            <CardDescription>Built on Base UI primitives with ARIA support out of the box.</CardDescription>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardTitle>Themeable</CardTitle>
            <CardDescription>CSS variables via vanilla-extract. Swap themes at runtime.</CardDescription>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardTitle>Type-safe</CardTitle>
            <CardDescription>Full TypeScript support with exported prop types.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="docs-section">
        <h2 className="docs-section-title">Installation</h2>
        <CodeBlock lang="bash" code="pnpm add @openlab-ui/react" />
      </div>

      <div className="docs-section">
        <h2 className="docs-section-title">Setup</h2>
        <CodeBlock
          code={`import { OpenLabUIProvider } from "@openlab-ui/react";
import "@openlab-ui/react/styles.css";

function App() {
  return (
    <OpenLabUIProvider>
      {/* your app */}
    </OpenLabUIProvider>
  );
}`}
        />
      </div>

      <div className="docs-section">
        <h2 className="docs-section-title">Dark Mode</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", marginBottom: "1rem" }}>
          Pass the <code>dark</code> prop to <code>OpenLabUIProvider</code> to enable the dark theme.
        </p>
        <CodeBlock
          code={`import { OpenLabUIProvider } from "@openlab-ui/react";

<OpenLabUIProvider dark={isDarkMode}>
  {children}
</OpenLabUIProvider>`}
        />
      </div>

      <div className="docs-section">
        <h2 className="docs-section-title">Quick Preview</h2>
        <div className="docs-preview docs-preview-column">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <Separator style={{ width: "100%" }} />
          <Alert style={{ maxWidth: 440 }}>
            <AlertTitle>Info alert</AlertTitle>
            <AlertDescription>This is an informational message for the user.</AlertDescription>
          </Alert>
        </div>
      </div>
    </Page>
  );
}
