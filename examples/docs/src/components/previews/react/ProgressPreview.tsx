import { Progress, Meter } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function ProgressBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Progress value={33} />
        <Progress value={66} />
        <Progress value={100} />
      </div>
    </ReactPreviewProvider>
  );
}

export function MeterBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Meter.Root value={25} min={0} max={100}>
          <Meter.Track><Meter.Indicator /></Meter.Track>
        </Meter.Root>
        <Meter.Root value={60} min={0} max={100}>
          <Meter.Track><Meter.Indicator /></Meter.Track>
        </Meter.Root>
        <Meter.Root value={90} min={0} max={100}>
          <Meter.Track><Meter.Indicator /></Meter.Track>
        </Meter.Root>
      </div>
    </ReactPreviewProvider>
  );
}
