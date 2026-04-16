import {
  Drawer,
  Button,
  Field,
  FieldLabel,
  Input,
  FieldGroup,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function DrawerPage() {
  return (
    <Page
      title="Drawer"
      description="A panel that slides in from the edge of the screen, typically used for navigation or forms."
    >
      <Section
        title="Basic"
        preview={
          <Drawer.Root>
            <Drawer.Trigger render={<Button variant="outline">Open Drawer</Button>} />
            <Drawer.Overlay />
            <Drawer.Popup>
              <Drawer.Title>Edit settings</Drawer.Title>
              <Drawer.Description>
                Update your account settings below.
              </Drawer.Description>
              <FieldGroup style={{ marginTop: "1rem" }}>
                <Field>
                  <FieldLabel htmlFor="drw-name">Display name</FieldLabel>
                  <Input id="drw-name" defaultValue="John Doe" />
                </Field>
              </FieldGroup>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.5rem", justifyContent: "flex-end" }}>
                <Drawer.Close render={<Button variant="outline">Cancel</Button>} />
                <Button>Save</Button>
              </div>
            </Drawer.Popup>
          </Drawer.Root>
        }
        code={`import { Drawer, Button } from "@openlab-ui/react";

<Drawer.Root>
  <Drawer.Trigger render={<Button variant="outline">Open Drawer</Button>} />
  <Drawer.Overlay />
  <Drawer.Popup>
    <Drawer.Title>Edit settings</Drawer.Title>
    <Drawer.Description>Update your account settings below.</Drawer.Description>
    {/* content */}
    <div>
      <Drawer.Close render={<Button variant="outline">Cancel</Button>} />
      <Button>Save</Button>
    </div>
  </Drawer.Popup>
</Drawer.Root>`}
      />
    </Page>
  );
}
