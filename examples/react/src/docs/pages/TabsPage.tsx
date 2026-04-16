import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Input,
  Field,
  FieldLabel,
  FieldGroup,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function TabsPage() {
  return (
    <Page
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
    >
      <Section
        title="Basic"
        column
        preview={
          <Tabs defaultValue="account" style={{ width: "100%", maxWidth: 480 }}>
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Make changes to your account here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="tabs-name">Name</FieldLabel>
                      <Input id="tabs-name" defaultValue="Pedro Duarte" />
                    </Field>
                  </FieldGroup>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="tabs-pw">Current password</FieldLabel>
                      <Input id="tabs-pw" type="password" />
                    </Field>
                  </FieldGroup>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage your preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)" }}>No settings yet.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        }
        code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@openlab-ui/react";

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account content here
  </TabsContent>
  <TabsContent value="password">
    Password content here
  </TabsContent>
</Tabs>`}
      />

      <Section
        title="Line Variant"
        column
        preview={
          <Tabs defaultValue="all" style={{ maxWidth: 400 }}>
            <TabsList variant="line">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </Tabs>
        }
        code={`<Tabs defaultValue="all">
  <TabsList variant="line">
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="draft">Draft</TabsTrigger>
  </TabsList>
</Tabs>`}
      />
    </Page>
  );
}
