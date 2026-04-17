import { MenuRoot, MenuTrigger, MenuPopup, MenuItem, MenuGroup, MenuGroupLabel, MenuPortal, MenuPositioner, MenuSeparator, Button } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function MenuBasic() {
  return (
    <ReactPreviewProvider>
      <MenuRoot>
        <MenuTrigger render={<Button variant="outline">Open Menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuGroup>
                <MenuGroupLabel>My Account</MenuGroupLabel>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem>Log out</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    </ReactPreviewProvider>
  );
}
