import { ComboboxRoot, ComboboxInput, ComboboxPopup, ComboboxList, ComboboxItem, ComboboxEmpty } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

const fruits = ["Apple", "Banana", "Blueberry", "Cherry", "Grape", "Mango", "Orange", "Peach", "Pear", "Strawberry"];

export function ComboboxBasic() {
  return (
    <ReactPreviewProvider>
      <ComboboxRoot<string>>
        <ComboboxInput placeholder="Search fruits…" style={{ width: 240 }} />
        <ComboboxPopup>
          <ComboboxList>
            {fruits.map((fruit) => (
              <ComboboxItem key={fruit} value={fruit}>{fruit}</ComboboxItem>
            ))}
            <ComboboxEmpty>No fruits found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxPopup>
      </ComboboxRoot>
    </ReactPreviewProvider>
  );
}
