import { CollapsibleRoot, CollapsibleTrigger, CollapsiblePanel, Button } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function CollapsibleBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <CollapsibleRoot defaultOpen>
          <CollapsibleTrigger render={<Button variant="outline" style={{ width: "100%", justifyContent: "space-between" }}>Toggle section ▾</Button>} />
          <CollapsiblePanel>
            <div style={{ padding: "0.75rem 0", fontSize: "0.875rem", color: "var(--color-muted-foreground)" }}>
              <p>This content can be collapsed or expanded by clicking the trigger above.</p>
            </div>
          </CollapsiblePanel>
        </CollapsibleRoot>
      </div>
    </ReactPreviewProvider>
  );
}
