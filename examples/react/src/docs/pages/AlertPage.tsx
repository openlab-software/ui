import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function AlertPage() {
  return (
    <Page
      title="Alert"
      description="Displays a callout for user attention with contextual feedback messages."
    >
      <Section
        title="Variants"
        column
        preview={
          <>
            <Alert variant="default">
              <AlertTitle>Default</AlertTitle>
              <AlertDescription>This is a default alert message for general information.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Destructive</AlertTitle>
              <AlertDescription>Something went wrong. Please try again or contact support.</AlertDescription>
            </Alert>
          </>
        }
        code={`import { Alert, AlertTitle, AlertDescription } from "@openlab-ui/react";

<Alert variant="default">
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>This is a default alert message.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Destructive</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>`}
      />

      <Section
        title="With Action"
        column
        preview={
          <Alert style={{ maxWidth: 480 }}>
            <AlertTitle>Your session is about to expire</AlertTitle>
            <AlertDescription>
              You will be logged out in 5 minutes due to inactivity.
            </AlertDescription>
          </Alert>
        }
        code={`import { Alert, AlertTitle, AlertDescription, AlertAction } from "@openlab-ui/react";

<Alert>
  <AlertTitle>Your session is about to expire</AlertTitle>
  <AlertDescription>You will be logged out in 5 minutes.</AlertDescription>
</Alert>`}
      />
    </Page>
  );
}
