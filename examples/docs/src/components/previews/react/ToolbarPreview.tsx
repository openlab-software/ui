import { ToolbarButton, ToolbarGroup, ToolbarRoot, ToolbarSeparator } from "@openlab-ui/react";
import { BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon } from "lucide-react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

const icon = { width: "1rem", height: "1rem" };

export function ToolbarBasic() {
  return (
    <ReactPreviewProvider>
      <ToolbarRoot aria-label="Text formatting">
        <ToolbarGroup>
          <ToolbarButton aria-label="Bold"><BoldIcon style={icon} /></ToolbarButton>
          <ToolbarButton aria-label="Italic"><ItalicIcon style={icon} /></ToolbarButton>
          <ToolbarButton aria-label="Underline"><UnderlineIcon style={icon} /></ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton aria-label="Align left"><AlignLeftIcon style={icon} /></ToolbarButton>
          <ToolbarButton aria-label="Align center"><AlignCenterIcon style={icon} /></ToolbarButton>
        </ToolbarGroup>
      </ToolbarRoot>
    </ReactPreviewProvider>
  );
}
