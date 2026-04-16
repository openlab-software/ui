import type { ReactNode } from "react";
import { Button } from "@openlab-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useHashRouter } from "./router";

interface NavItem {
  id: string;
  label: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV: NavSection[] = [
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
      { id: "input", label: "Input & Textarea" },
      { id: "select", label: "Select" },
      { id: "checkbox", label: "Checkbox" },
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
      { id: "drawer", label: "Drawer" },
      { id: "popover", label: "Popover" },
      { id: "tooltip", label: "Tooltip" },
      { id: "menu", label: "Menu" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { id: "accordion", label: "Accordion" },
      { id: "tabs", label: "Tabs" },
    ],
  },
  {
    title: "Utilities",
    items: [{ id: "misc", label: "Kbd, Toggle, Breadcrumb…" }],
  },
];

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  onToggleDark: () => void;
}

export function Layout({ children, darkMode, onToggleDark }: LayoutProps) {
  const { route, navigate } = useHashRouter("overview");

  return (
    <div className="docs-root">
      {/* Header */}
      <header className="docs-header">
        <a href="#overview" className="docs-header-brand">
          <div className="docs-header-brand-logo">OL</div>
          <span>OpenLab UI</span>
        </a>
        <div className="docs-header-actions">
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon style={{ width: "1rem", height: "1rem" }} />
            ) : (
              <MoonIcon style={{ width: "1rem", height: "1rem" }} />
            )}
          </Button>
        </div>
      </header>

      <div className="docs-body">
        {/* Sidebar */}
        <nav className="docs-sidebar">
          {NAV.map((section) => (
            <div key={section.title} className="docs-nav-section">
              <div className="docs-nav-section-title">{section.title}</div>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className={`docs-nav-item${route === item.id ? " active" : ""}`}
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Main */}
        <main className="docs-main">{children}</main>
      </div>
    </div>
  );
}
