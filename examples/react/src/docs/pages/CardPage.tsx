import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Button,
  Badge,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function CardPage() {
  return (
    <Page
      title="Card"
      description="A container with a header, content, and footer for grouping related information."
    >
      <Section
        title="Basic"
        preview={
          <Card style={{ width: "100%", maxWidth: 360 }}>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>
                Manage your billing and subscription.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-muted-foreground)",
                }}
              >
                You are currently on the <strong>Pro</strong> plan. Your next
                billing date is March 1, 2026.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="outline" size="sm">
                  Cancel plan
                </Button>
                <Button size="sm">Upgrade</Button>
              </CardAction>
            </CardFooter>
          </Card>
        }
        code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@openlab-ui/react";

<Card>
  <CardHeader>
    <CardTitle>Subscription Plan</CardTitle>
    <CardDescription>Manage your billing and subscription.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>You are currently on the Pro plan.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Cancel plan</Button>
    <Button size="sm">Upgrade</Button>
  </CardFooter>
</Card>`}
      />

      <Section
        title="With Action"
        preview={
          <Card style={{ width: "100%", maxWidth: 360 }}>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
              <CardDescription>January – June 2025</CardDescription>
              <CardAction>
                <Badge variant="secondary">+12%</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p style={{ fontSize: "2rem", fontWeight: 700 }}>R$ 45.231</p>
            </CardContent>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>Total Revenue</CardTitle>
    <CardDescription>January – June 2025</CardDescription>
    <CardAction>
      <Badge variant="secondary">+12%</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>R$ 45.231</p>
  </CardContent>
</Card>`}
      />

      <Section
        title="Small Size"
        preview={
          <Card size="sm" style={{ maxWidth: 300 }}>
            <CardHeader>
              <CardTitle>Quick Note</CardTitle>
            </CardHeader>
            <CardContent>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-muted-foreground)",
                }}
              >
                Compact card for dense UI layouts.
              </p>
            </CardContent>
          </Card>
        }
        code={`<Card size="sm">
  <CardHeader>
    <CardTitle>Quick Note</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Compact card for dense UI layouts.</p>
  </CardContent>
</Card>`}
      />
    </Page>
  );
}
