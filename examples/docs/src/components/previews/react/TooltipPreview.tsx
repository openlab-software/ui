import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function TooltipBasic() {
  return (
    <ReactPreviewProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent><p>This is a tooltip</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm">Top</Button>} />
        <TooltipContent side="top"><p>Appears on top</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm">Right</Button>} />
        <TooltipContent side="right"><p>Appears on right</p></TooltipContent>
      </Tooltip>
    </ReactPreviewProvider>
  );
}
