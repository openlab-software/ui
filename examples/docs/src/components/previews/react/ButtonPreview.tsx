import { Button } from "@openlab-ui/react";
import { PlusIcon, ArrowRightIcon } from "lucide-react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function ButtonVariants() {
  return (
    <ReactPreviewProvider>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </ReactPreviewProvider>
  );
}

export function ButtonSizes() {
  return (
    <ReactPreviewProvider>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </ReactPreviewProvider>
  );
}

export function ButtonIcons() {
  return (
    <ReactPreviewProvider>
      <Button size="icon-sm" variant="outline">
        <PlusIcon style={{ width: "1rem", height: "1rem" }} />
      </Button>
      <Button size="icon" variant="outline">
        <PlusIcon style={{ width: "1rem", height: "1rem" }} />
      </Button>
      <Button size="icon-lg" variant="outline">
        <PlusIcon style={{ width: "1rem", height: "1rem" }} />
      </Button>
      <Button>
        <PlusIcon style={{ width: "1rem", height: "1rem" }} data-icon="inline-start" />
        Add item
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRightIcon style={{ width: "1rem", height: "1rem" }} data-icon="inline-end" />
      </Button>
    </ReactPreviewProvider>
  );
}

export function ButtonDisabled() {
  return (
    <ReactPreviewProvider>
      <Button disabled>Default</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button disabled variant="outline">Outline</Button>
    </ReactPreviewProvider>
  );
}
