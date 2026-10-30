import {
  AutocompleteEmpty, AutocompleteInput, AutocompleteItem, AutocompleteListbox, AutocompletePopup, AutocompleteRoot,
} from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

const FRAMEWORKS = ["React", "Vue", "Svelte", "Solid", "Angular", "Astro"];

export function AutocompleteBasic() {
  return (
    <ReactPreviewProvider>
      <AutocompleteRoot items={FRAMEWORKS}>
        <AutocompleteInput placeholder="Search frameworks..." />
        <AutocompletePopup>
          <AutocompleteEmpty>No results.</AutocompleteEmpty>
          <AutocompleteListbox>
            {(item: string) => (
              <AutocompleteItem key={item} value={item}>
                {item}
              </AutocompleteItem>
            )}
          </AutocompleteListbox>
        </AutocompletePopup>
      </AutocompleteRoot>
    </ReactPreviewProvider>
  );
}
