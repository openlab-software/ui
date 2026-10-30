import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@openlab-ui/react";
import { SearchIcon } from "lucide-react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function InputGroupBasic() {
  return (
    <ReactPreviewProvider>
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon style={{ width: "1rem", height: "1rem" }} />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Your name" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Save</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </ReactPreviewProvider>
  );
}
