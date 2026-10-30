export interface NavItem {
  id: string;
  label: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const NAV: NavSection[] = [
  {
    title: "Getting Started",
    items: [{ id: "overview", label: "Overview" }],
  },
  {
    title: "Layout",
    items: [
      { id: "card", label: "Card" },
      { id: "separator", label: "Separator" },
      { id: "scroll-area", label: "Scroll Area" },
    ],
  },
  {
    title: "Forms",
    items: [
      { id: "button", label: "Button" },
      { id: "field", label: "Field" },
      { id: "input", label: "Input & Textarea" },
      { id: "input-group", label: "Input Group" },
      { id: "number-field", label: "Number Field" },
      { id: "select", label: "Select" },
      { id: "combobox", label: "Combobox" },
      { id: "autocomplete", label: "Autocomplete" },
      { id: "checkbox", label: "Checkbox" },
      { id: "checkbox-group", label: "Checkbox Group" },
      { id: "radio-group", label: "Radio Group" },
      { id: "switch", label: "Switch" },
      { id: "slider", label: "Slider" },
    ],
  },
  {
    title: "Display",
    items: [
      { id: "badge", label: "Badge" },
      { id: "alert", label: "Alert" },
      { id: "avatar", label: "Avatar" },
      { id: "progress", label: "Progress & Meter" },
      { id: "table", label: "Table" },
      { id: "datatable", label: "Data Table" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { id: "spinner", label: "Spinner & Skeleton" },
      { id: "toast", label: "Toast" },
    ],
  },
  {
    title: "Overlay",
    items: [
      { id: "dialog", label: "Dialog" },
      { id: "alert-dialog", label: "Alert Dialog" },
      { id: "drawer", label: "Drawer" },
      { id: "popover", label: "Popover" },
      { id: "preview-card", label: "Preview Card" },
      { id: "context-menu", label: "Context Menu" },
      { id: "tooltip", label: "Tooltip" },
      { id: "menu", label: "Menu" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { id: "accordion", label: "Accordion" },
      { id: "collapsible", label: "Collapsible" },
      { id: "tabs", label: "Tabs" },
      { id: "toolbar", label: "Toolbar" },
    ],
  },
  {
    title: "Utilities",
    items: [{ id: "misc", label: "Kbd, Toggle, Breadcrumb…" }],
  },
];

export const FLAT_NAV: NavItem[] = NAV.flatMap((s) => s.items);
