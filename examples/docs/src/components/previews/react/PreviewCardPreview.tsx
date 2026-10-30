import { PreviewCardPopup, PreviewCardRoot, PreviewCardTrigger } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function PreviewCardBasic() {
  return (
    <ReactPreviewProvider>
      <p style={{ fontSize: "0.875rem" }}>
        Built with{" "}
        <PreviewCardRoot>
          <PreviewCardTrigger href="https://base-ui.com" style={{ textDecoration: "underline" }}>
            Base UI
          </PreviewCardTrigger>
          <PreviewCardPopup>
            <strong>Base UI</strong>
            <p style={{ margin: "0.25rem 0 0", fontSize: "0.8125rem" }}>
              Unstyled, accessible components for building high-quality UIs.
            </p>
          </PreviewCardPopup>
        </PreviewCardRoot>
        .
      </p>
    </ReactPreviewProvider>
  );
}
