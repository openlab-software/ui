import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
  Field,
  FieldLabel,
  Input,
  FieldGroup,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function DialogPage() {
  return (
    <Page
      title="Dialog"
      description="A modal window that requires user interaction before returning to the main flow."
    >
      <Section
        title="Basic"
        preview={
          <Dialog>
            <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button variant="destructive">Delete account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogClose, Button } from "@openlab-ui/react";

<Dialog>
  <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline">Cancel</Button>} />
      <Button variant="destructive">Delete account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />

      <Section
        title="With Form"
        preview={
          <Dialog>
            <DialogTrigger render={<Button>Edit profile</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="dlg-name">Name</FieldLabel>
                  <Input id="dlg-name" defaultValue="John Doe" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="dlg-email">Email</FieldLabel>
                  <Input id="dlg-email" type="email" defaultValue="john@example.com" />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger render={<Button>Edit profile</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input id="name" defaultValue="John Doe" />
      </Field>
    </FieldGroup>
    <DialogFooter>
      <DialogClose render={<Button variant="outline">Cancel</Button>} />
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />
    </Page>
  );
}
