import { Separator } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function SeparatorBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <p style={{ fontSize: "0.875rem", fontWeight: 500 }}>OpenLab UI</p>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-muted-foreground)" }}>
            A component library for React and Vue.
          </p>
        </div>
        <Separator />
        <div style={{ display: "flex", gap: "1rem", fontSize: "0.875rem", alignItems: "center" }}>
          <span>Components</span>
          <Separator orientation="vertical" style={{ height: "1.25rem" }} />
          <span>Theming</span>
          <Separator orientation="vertical" style={{ height: "1.25rem" }} />
          <span>Docs</span>
        </div>
      </div>
    </ReactPreviewProvider>
  );
}
