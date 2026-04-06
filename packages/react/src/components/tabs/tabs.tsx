import { Tabs as TabsBase } from "@base-ui/react/tabs";
import * as styles from "@patrick-ui/core/tabs/tabs.css";

export type TabsRootProps = TabsBase.Root.Props;
export type TabsListProps = TabsBase.List.Props;
export type TabsIndicatorProps = TabsBase.Indicator.Props;
export type TabsTabProps = TabsBase.Tab.Props;
export type TabsPanelProps = TabsBase.Panel.Props;

export function TabsRoot(props: TabsRootProps) {
  return <TabsBase.Root className={styles.root} {...props} />;
}
TabsRoot.displayName = "PatrickUITabsRoot";
export function TabsList(props: TabsListProps) {
  return <TabsBase.List className={styles.list} {...props} />;
}
TabsList.displayName = "PatrickUITabsList";
export function TabsIndicator(props: TabsIndicatorProps) {
  return <TabsBase.Indicator className={styles.indicator} {...props} />;
}
TabsIndicator.displayName = "PatrickUITabsIndicator";
export function TabsTab(props: TabsTabProps) {
  return <TabsBase.Tab className={styles.tab} {...props} />;
}
TabsTab.displayName = "PatrickUITabsTab";
export function TabsPanel(props: TabsPanelProps) {
  return <TabsBase.Panel className={styles.panel} {...props} />;
}
TabsPanel.displayName = "PatrickUITabsPanel";

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Indicator: TabsIndicator,
  Tab: TabsTab,
  Panel: TabsPanel,
};
