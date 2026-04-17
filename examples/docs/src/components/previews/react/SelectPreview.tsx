import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function SelectBasic() {
  return (
    <ReactPreviewProvider>
      <Select>
        <SelectTrigger style={{ width: 200 }}>
          <SelectValue placeholder="Select a fruit…" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </ReactPreviewProvider>
  );
}
