import { Kbd, Toggle, ToggleGroup, ToggleGroupItem, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@openlab-ui/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function KbdBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <Kbd>⌘</Kbd>
        <Kbd>⌘K</Kbd>
        <span style={{ fontSize: "0.875rem" }}>or</span>
        <Kbd>Ctrl</Kbd>
        <span style={{ fontSize: "0.875rem" }}>+</span>
        <Kbd>K</Kbd>
      </div>
    </ReactPreviewProvider>
  );
}

export function ToggleBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <Toggle>Bold</Toggle>
        <Toggle pressed>Italic</Toggle>
        <Toggle variant="outline">Underline</Toggle>
      </div>
    </ReactPreviewProvider>
  );
}

export function ToggleGroupBasic() {
  return (
    <ReactPreviewProvider>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon style={{ width: "1rem", height: "1rem" }} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon style={{ width: "1rem", height: "1rem" }} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <UnderlineIcon style={{ width: "1rem", height: "1rem" }} />
        </ToggleGroupItem>
      </ToggleGroup>
    </ReactPreviewProvider>
  );
}

export function BreadcrumbBasic() {
  return (
    <ReactPreviewProvider>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </ReactPreviewProvider>
  );
}
