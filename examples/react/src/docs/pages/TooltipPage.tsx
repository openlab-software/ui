import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function TooltipPage() {
  return (
    <Page
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    >
      <Section
        title="Basic"
        center
        preview={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
              <TooltipContent>This is a tooltip</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Button } from "@openlab-ui/react";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
    <TooltipContent>This is a tooltip</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <Section
        title="Placement"
        center
        preview={
          <TooltipProvider>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Top</Button>} />
                <TooltipContent side="top">Tooltip on top</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Bottom</Button>} />
                <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Left</Button>} />
                <TooltipContent side="left">Tooltip on left</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="sm">Right</Button>} />
                <TooltipContent side="right">Tooltip on right</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        }
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" size="sm">Top</Button>} />
    <TooltipContent side="top">Tooltip on top</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <Section
        title="With Delay"
        center
        preview={
          <TooltipProvider delay={500}>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline">500ms delay</Button>} />
              <TooltipContent>Shows after 500ms</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        code={`<TooltipProvider delay={500}>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">500ms delay</Button>} />
    <TooltipContent>Shows after 500ms</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />
    </Page>
  );
}
