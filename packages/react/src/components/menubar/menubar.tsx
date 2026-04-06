import {
  Menubar as MenubarBase,
  type MenubarProps,
} from "@base-ui/react/menubar";
import * as styles from "@patrick-ui/core/menubar/menubar.css";

export type { MenubarProps };

export function Menubar(props: MenubarProps) {
  return <MenubarBase className={styles.root} {...props} />;
}
Menubar.displayName = "PatrickUIMenubar";
