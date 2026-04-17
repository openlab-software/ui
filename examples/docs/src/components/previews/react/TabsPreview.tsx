import { Tabs, TabsList, TabsTrigger, TabsContent } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function TabsBasic() {
  return (
    <ReactPreviewProvider>
      <Tabs defaultValue="account" style={{ width: "100%", maxWidth: 480 }}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", padding: "1rem 0" }}>
            Manage your account settings and preferences.
          </p>
        </TabsContent>
        <TabsContent value="security">
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", padding: "1rem 0" }}>
            Configure two-factor authentication and password policies.
          </p>
        </TabsContent>
        <TabsContent value="notifications">
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", padding: "1rem 0" }}>
            Choose what notifications you receive and how.
          </p>
        </TabsContent>
      </Tabs>
    </ReactPreviewProvider>
  );
}
