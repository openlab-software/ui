import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  Button,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function PopoverPage() {
  return (
    <Page
      title="Popover"
      description="A floating overlay that provides additional information or actions anchored to a trigger element."
    >
      <Section
        title="Basic"
        center
        preview={
          <Popover>
            <PopoverTrigger render={<Button variant="outline">Open Popover</Button>} />
            <PopoverContent style={{ width: 260 }}>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer you want to resize.
              </PopoverDescription>
            </PopoverContent>
          </Popover>
        }
        code={`import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription } from "@openlab-ui/react";

<Popover>
  <PopoverTrigger render={<Button variant="outline">Open Popover</Button>} />
  <PopoverContent style={{ width: 260 }}>
    <PopoverTitle>Dimensions</PopoverTitle>
    <PopoverDescription>
      Set the dimensions for the layer you want to resize.
    </PopoverDescription>
  </PopoverContent>
</Popover>`}
      />

      <Section
        title="Placement"
        center
        preview={
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="sm">Top</Button>} />
              <PopoverContent side="top" style={{ width: 160 }}>
                <PopoverDescription>Popover on top</PopoverDescription>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="sm">Bottom</Button>} />
              <PopoverContent side="bottom" style={{ width: 160 }}>
                <PopoverDescription>Popover on bottom</PopoverDescription>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="sm">Left</Button>} />
              <PopoverContent side="left" style={{ width: 160 }}>
                <PopoverDescription>Popover on left</PopoverDescription>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger render={<Button variant="outline" size="sm">Right</Button>} />
              <PopoverContent side="right" style={{ width: 160 }}>
                <PopoverDescription>Popover on right</PopoverDescription>
              </PopoverContent>
            </Popover>
          </div>
        }
        code={`<Popover>
  <PopoverTrigger render={<Button variant="outline" size="sm">Top</Button>} />
  <PopoverContent side="top">
    <PopoverDescription>Popover on top</PopoverDescription>
  </PopoverContent>
</Popover>`}
      />
    </Page>
  );
}
