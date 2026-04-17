import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction, Button, Badge } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function CardBasic() {
  return (
    <ReactPreviewProvider>
      <Card style={{ width: "100%", maxWidth: 360 }}>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>Manage your billing and subscription.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)" }}>
            You are currently on the <strong>Pro</strong> plan. Your next billing date is March 1, 2026.
          </p>
        </CardContent>
        <CardFooter>
          <CardAction>
            <Button variant="outline" size="sm">Cancel plan</Button>
            <Button size="sm">Upgrade</Button>
          </CardAction>
        </CardFooter>
      </Card>
    </ReactPreviewProvider>
  );
}

export function CardWithAction() {
  return (
    <ReactPreviewProvider>
      <Card style={{ width: "100%", maxWidth: 360 }}>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>January – June 2025</CardDescription>
          <CardAction><Badge variant="secondary">+12%</Badge></CardAction>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: "2rem", fontWeight: 700 }}>R$ 45.231</p>
        </CardContent>
      </Card>
    </ReactPreviewProvider>
  );
}

export function CardSmall() {
  return (
    <ReactPreviewProvider>
      <Card size="sm" style={{ maxWidth: 300 }}>
        <CardHeader><CardTitle>Quick Note</CardTitle></CardHeader>
        <CardContent>
          <p style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)" }}>
            Compact card for dense UI layouts.
          </p>
        </CardContent>
      </Card>
    </ReactPreviewProvider>
  );
}
