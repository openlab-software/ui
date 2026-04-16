import {
  Progress,
  MeterRoot,
  MeterTrack,
  MeterIndicator,
  MeterLabel,
  MeterValue,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function ProgressPage() {
  return (
    <Page
      title="Progress & Meter"
      description="Visual indicators for displaying completion status and measured values."
    >
      <Section
        title="Progress"
        description="Shows how much of a task has been completed."
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: 400 }}>
            <Progress value={0} />
            <Progress value={25} />
            <Progress value={60} />
            <Progress value={100} />
            <Progress value={null} />
          </div>
        }
        code={`import { Progress } from "@openlab-ui/react";

<Progress value={0} />
<Progress value={60} />
<Progress value={100} />
<Progress value={null} /> {/* indeterminate */}`}
      />

      <Section
        title="Meter"
        description="Represents a scalar measurement within a known range."
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%", maxWidth: 400 }}>
            <MeterRoot value={30} min={0} max={100}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                <MeterLabel>Storage used</MeterLabel>
                <MeterValue />
              </div>
              <MeterTrack>
                <MeterIndicator />
              </MeterTrack>
            </MeterRoot>

            <MeterRoot value={75} min={0} max={100}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                <MeterLabel>CPU usage</MeterLabel>
                <MeterValue />
              </div>
              <MeterTrack>
                <MeterIndicator />
              </MeterTrack>
            </MeterRoot>
          </div>
        }
        code={`import { MeterRoot, MeterTrack, MeterIndicator, MeterLabel, MeterValue } from "@openlab-ui/react";

<MeterRoot value={30} min={0} max={100}>
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <MeterLabel>Storage used</MeterLabel>
    <MeterValue />
  </div>
  <MeterTrack>
    <MeterIndicator />
  </MeterTrack>
</MeterRoot>`}
      />
    </Page>
  );
}
