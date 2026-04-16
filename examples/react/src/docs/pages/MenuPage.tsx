import {
  MenuRoot,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuGroup,
  MenuGroupLabel,
  MenuPortal,
  MenuPositioner,
  MenuSeparator,
  Button,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function MenuPage() {
  return (
    <Page
      title="Menu"
      description="A list of options that appears when the user interacts with a trigger element."
    >
      <Section
        title="Basic"
        center
        preview={
          <MenuRoot>
            <MenuTrigger render={<Button variant="outline">Open menu</Button>} />
            <MenuPortal>
              <MenuPositioner>
                <MenuPopup>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing</MenuItem>
                  <MenuSeparator />
                  <MenuItem>Log out</MenuItem>
                </MenuPopup>
              </MenuPositioner>
            </MenuPortal>
          </MenuRoot>
        }
        code={`import { MenuRoot, MenuTrigger, MenuPopup, MenuItem, MenuPortal, MenuPositioner, MenuSeparator } from "@openlab-ui/react";

<MenuRoot>
  <MenuTrigger render={<Button variant="outline">Open menu</Button>} />
  <MenuPortal>
    <MenuPositioner>
      <MenuPopup>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuSeparator />
        <MenuItem>Log out</MenuItem>
      </MenuPopup>
    </MenuPositioner>
  </MenuPortal>
</MenuRoot>`}
      />

      <Section
        title="With Groups"
        center
        preview={
          <MenuRoot>
            <MenuTrigger render={<Button variant="outline">Account menu</Button>} />
            <MenuPortal>
              <MenuPositioner>
                <MenuPopup>
                  <MenuGroup>
                    <MenuGroupLabel>My account</MenuGroupLabel>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                  </MenuGroup>
                  <MenuSeparator />
                  <MenuGroup>
                    <MenuItem>Support</MenuItem>
                    <MenuItem>Log out</MenuItem>
                  </MenuGroup>
                </MenuPopup>
              </MenuPositioner>
            </MenuPortal>
          </MenuRoot>
        }
        code={`<MenuRoot>
  <MenuTrigger render={<Button variant="outline">Account menu</Button>} />
  <MenuPortal>
    <MenuPositioner>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>My account</MenuGroupLabel>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem>Log out</MenuItem>
      </MenuPopup>
    </MenuPositioner>
  </MenuPortal>
</MenuRoot>`}
      />
    </Page>
  );
}
