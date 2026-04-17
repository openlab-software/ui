import { Spinner, Skeleton } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function SpinnerBasic() {
  return (
    <ReactPreviewProvider>
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </ReactPreviewProvider>
  );
}

export function SkeletonBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 320, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Skeleton style={{ height: "1rem", width: "60%" }} />
        <Skeleton style={{ height: "0.75rem", width: "90%" }} />
        <Skeleton style={{ height: "0.75rem", width: "75%" }} />
        <Skeleton style={{ height: "0.75rem", width: "80%" }} />
      </div>
    </ReactPreviewProvider>
  );
}
