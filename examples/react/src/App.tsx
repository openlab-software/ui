import { useState } from "react";
import { OpenLabUIProvider } from "@openlab-ui/react";
import { Layout } from "./docs/Layout";
import { useHashRouter } from "./docs/router";
import { OverviewPage } from "./docs/pages/OverviewPage";
import { ButtonPage } from "./docs/pages/ButtonPage";
import { BadgePage } from "./docs/pages/BadgePage";
import { AlertPage } from "./docs/pages/AlertPage";
import { AvatarPage } from "./docs/pages/AvatarPage";
import { CardPage } from "./docs/pages/CardPage";
import { InputPage } from "./docs/pages/InputPage";
import { SelectPage } from "./docs/pages/SelectPage";
import { CheckboxPage } from "./docs/pages/CheckboxPage";
import { RadioGroupPage } from "./docs/pages/RadioGroupPage";
import { SwitchPage } from "./docs/pages/SwitchPage";
import { SliderPage } from "./docs/pages/SliderPage";
import { ProgressPage } from "./docs/pages/ProgressPage";
import { AccordionPage } from "./docs/pages/AccordionPage";
import { DialogPage } from "./docs/pages/DialogPage";
import { DrawerPage } from "./docs/pages/DrawerPage";
import { PopoverPage } from "./docs/pages/PopoverPage";
import { TooltipPage } from "./docs/pages/TooltipPage";
import { TabsPage } from "./docs/pages/TabsPage";
import { ToastPage } from "./docs/pages/ToastPage";
import { MenuPage } from "./docs/pages/MenuPage";
import { TablePage } from "./docs/pages/TablePage";
import { MiscPage } from "./docs/pages/MiscPage";
import "./docs/docs.css";

const PAGES: Record<string, React.ComponentType> = {
  overview: OverviewPage,
  button: ButtonPage,
  badge: BadgePage,
  alert: AlertPage,
  avatar: AvatarPage,
  card: CardPage,
  input: InputPage,
  select: SelectPage,
  checkbox: CheckboxPage,
  "radio-group": RadioGroupPage,
  switch: SwitchPage,
  slider: SliderPage,
  progress: ProgressPage,
  accordion: AccordionPage,
  dialog: DialogPage,
  drawer: DrawerPage,
  popover: PopoverPage,
  tooltip: TooltipPage,
  tabs: TabsPage,
  toast: ToastPage,
  menu: MenuPage,
  table: TablePage,
  misc: MiscPage,
  spinner: MiscPage,
  "scroll-area": MiscPage,
  separator: MiscPage,
};

function Router() {
  const { route } = useHashRouter("overview");
  const Page = PAGES[route] ?? OverviewPage;
  return <Page />;
}

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <OpenLabUIProvider dark={dark}>
      <Layout darkMode={dark} onToggleDark={() => setDark((d) => !d)}>
        <Router />
      </Layout>
    </OpenLabUIProvider>
  );
}
