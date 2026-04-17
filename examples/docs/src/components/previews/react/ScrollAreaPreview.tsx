import { ScrollArea } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

const tags = Array.from({ length: 30 }, (_, i) => `Tag ${i + 1}`);

export function ScrollAreaBasic() {
  return (
    <ReactPreviewProvider>
      <ScrollArea style={{ height: 200, width: 300, border: "1px solid var(--color-border)", borderRadius: 4 }}>
        <div style={{ padding: "1rem" }}>
          {tags.map((tag) => (
            <div key={tag} style={{ padding: "0.375rem 0", fontSize: "0.875rem", borderBottom: "1px solid var(--color-border)" }}>
              {tag}
            </div>
          ))}
        </div>
      </ScrollArea>
    </ReactPreviewProvider>
  );
}
