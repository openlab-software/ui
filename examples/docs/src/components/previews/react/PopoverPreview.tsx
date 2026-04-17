import { Popover, PopoverTrigger, PopoverContent, Button } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function PopoverBasic() {
  return (
    <ReactPreviewProvider>
      <Popover>
        <PopoverTrigger render={<Button variant="outline">Open Popover</Button>} />
        <PopoverContent style={{ width: 280 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p style={{ fontWeight: 600, fontSize: "0.875rem" }}>Dimensions</p>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted-foreground)" }}>
              Set the dimensions of the container. Width and height are in pixels.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ReactPreviewProvider>
  );
}
