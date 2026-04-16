import { Slider } from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function SliderPage() {
  return (
    <Page
      title="Slider"
      description="An input that allows users to select a value from a range by dragging a thumb."
    >
      <Section
        title="Basic"
        column
        preview={
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%", maxWidth: 400 }}>
            <Slider defaultValue={[50]} />
            <Slider defaultValue={[25]} />
            <Slider defaultValue={[75]} disabled />
          </div>
        }
        code={`import { Slider } from "@openlab-ui/react";

<Slider defaultValue={[50]} />
<Slider defaultValue={[25]} />
<Slider defaultValue={[75]} disabled />`}
      />

      <Section
        title="Range Slider"
        description="Use two thumb values to define a range."
        column
        preview={
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Slider defaultValue={[20, 80]} />
          </div>
        }
        code={`<Slider defaultValue={[20, 80]} />`}
      />

      <Section
        title="Custom Range"
        column
        preview={
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Slider defaultValue={[500]} min={0} max={1000} step={50} />
          </div>
        }
        code={`<Slider defaultValue={[500]} min={0} max={1000} step={50} />`}
      />
    </Page>
  );
}
