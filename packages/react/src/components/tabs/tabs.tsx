import { Tabs as TabsBase } from "@base-ui/react/tabs";
import * as styles from "@patrick-ui/core/tabs/tabs.css";
import type { TabsListVariants } from "@patrick-ui/core/tabs/tabs.css";

export function Tabs({
  orientation = "horizontal",
  ...props
}: TabsBase.Root.Props) {
  return (
    <TabsBase.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={styles.root}
      orientation={orientation}
      {...props}
    />
  );
}

export function TabsList({
  variant = "default",
  ...props
}: TabsBase.List.Props & TabsListVariants) {
  return (
    <TabsBase.List
      data-slot="tabs-list"
      data-variant={variant}
      className={styles.list({ variant })}
      {...props}
    />
  );
}

export function TabsTrigger(props: TabsBase.Tab.Props) {
  return (
    <TabsBase.Tab
      data-slot="tabs-trigger"
      className={styles.trigger}
      {...props}
    />
  );
}

export function TabsContent(props: TabsBase.Panel.Props) {
  return (
    <TabsBase.Panel
      data-slot="tabs-content"
      className={styles.panel}
      {...props}
    />
  );
}

export const TabsPanel = TabsContent;
