import { Alert, AlertTitle, AlertDescription } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function AlertDefault() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Alert>
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            This is a default alert with some information for the user.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    </ReactPreviewProvider>
  );
}
