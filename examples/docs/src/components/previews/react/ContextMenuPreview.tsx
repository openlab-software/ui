import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuLabel, ContextMenuGroup, ContextMenuShortcut } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function ContextMenuBasic() {
  return (
    <ReactPreviewProvider>
      <ContextMenu>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 120, width: 280, border: "1px dashed var(--color-border)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-muted-foreground)", userSelect: "none" }}>
          Right-click here
        </div>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>Open <ContextMenuShortcut>↵</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Copy link <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </ReactPreviewProvider>
  );
}
