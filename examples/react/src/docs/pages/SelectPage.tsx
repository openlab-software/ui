import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

export function SelectPage() {
  return (
    <Page
      title="Select"
      description="Displays a list of options for the user to pick from, triggered by a button."
    >
      <Section
        title="Basic"
        preview={
          <Select>
            <SelectTrigger style={{ width: 200 }}>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        }
        code={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@openlab-ui/react";

<Select>
  <SelectTrigger style={{ width: 200 }}>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`}
      />

      <Section
        title="With Groups"
        preview={
          <Select>
            <SelectTrigger style={{ width: 220 }}>
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Americas</SelectLabel>
                <SelectItem value="est">Eastern (EST)</SelectItem>
                <SelectItem value="cst">Central (CST)</SelectItem>
                <SelectItem value="brt">Brasília (BRT)</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">London (GMT)</SelectItem>
                <SelectItem value="cet">Berlin (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        }
        code={`<Select>
  <SelectTrigger style={{ width: 220 }}>
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Americas</SelectLabel>
      <SelectItem value="est">Eastern (EST)</SelectItem>
      <SelectItem value="brt">Brasília (BRT)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">London (GMT)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      />

      <Section
        title="Disabled"
        preview={
          <Select disabled>
            <SelectTrigger style={{ width: 200 }}>
              <SelectValue placeholder="Not available" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
        }
        code={`<Select disabled>
  <SelectTrigger style={{ width: 200 }}>
    <SelectValue placeholder="Not available" />
  </SelectTrigger>
</Select>`}
      />
    </Page>
  );
}
