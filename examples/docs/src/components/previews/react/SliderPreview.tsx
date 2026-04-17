import { Slider } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function SliderBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 300, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Slider defaultValue={[40]} min={0} max={100} step={1} />
        <Slider defaultValue={[20, 80]} min={0} max={100} step={1} />
        <Slider defaultValue={[50]} min={0} max={100} step={10} disabled />
      </div>
    </ReactPreviewProvider>
  );
}
