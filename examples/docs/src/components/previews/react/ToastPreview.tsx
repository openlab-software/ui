import { Button } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function ToastBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-start" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)" }}>
          Toast notifications require the <code>sonner</code> package. Install it and wrap
          your app with the <code>Toaster</code> component.
        </p>
        <Button variant="outline" onClick={() => alert("Add sonner to your project to see toasts in action.")}>
          Show Toast
        </Button>
      </div>
    </ReactPreviewProvider>
  );
}
