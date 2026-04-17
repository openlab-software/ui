import { Drawer, Button } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function DrawerBasic() {
  return (
    <ReactPreviewProvider>
      <Drawer.Root>
        <Drawer.Trigger render={<Button variant="outline">Open Drawer</Button>} />
        <Drawer.Overlay />
        <Drawer.Popup>
          <Drawer.Title>Shopping Cart</Drawer.Title>
          <Drawer.Description>Review your items before checkout.</Drawer.Description>
          <div style={{ padding: "1rem 0", flex: 1 }}>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)" }}>
              Your cart is empty.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem", justifyContent: "flex-end" }}>
            <Drawer.Close render={<Button variant="outline">Cancel</Button>} />
            <Button>Checkout</Button>
          </div>
        </Drawer.Popup>
      </Drawer.Root>
    </ReactPreviewProvider>
  );
}
