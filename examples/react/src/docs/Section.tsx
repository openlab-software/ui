import type { ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

interface SectionProps {
  title: string;
  description?: string;
  code?: string;
  preview?: ReactNode;
  column?: boolean;
  center?: boolean;
}

export function Section({
  title,
  description,
  code,
  preview,
  column,
  center,
}: SectionProps) {
  const previewClass = [
    "docs-preview",
    column ? "docs-preview-column" : "",
    center ? "docs-preview-center" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="docs-section">
      <h2 className="docs-section-title">{title}</h2>
      {description && (
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", marginBottom: "1rem" }}>
          {description}
        </p>
      )}
      {preview && <div className={previewClass}>{preview}</div>}
      {code && <CodeBlock code={code} />}
    </div>
  );
}

interface PageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Page({ title, description, children }: PageProps) {
  return (
    <div>
      <h1 className="docs-page-title">{title}</h1>
      <p className="docs-page-description">{description}</p>
      {children}
    </div>
  );
}
