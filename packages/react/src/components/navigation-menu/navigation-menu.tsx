import { NavigationMenu as NavBase } from "@base-ui/react/navigation-menu";
import * as styles from "@openlab-ui/core/navigation-menu/navigation-menu.css";

export type NavigationMenuRootProps = NavBase.Root.Props;
export type NavigationMenuListProps = NavBase.List.Props;
export type NavigationMenuItemProps = NavBase.Item.Props;
export type NavigationMenuTriggerProps = NavBase.Trigger.Props;
export type NavigationMenuPopupProps = NavBase.Popup.Props;
export type NavigationMenuViewportProps = NavBase.Viewport.Props;
export type NavigationMenuBackdropProps = NavBase.Backdrop.Props;
export type NavigationMenuArrowProps = NavBase.Arrow.Props;

export function NavigationMenuRoot(props: NavigationMenuRootProps) {
  return <NavBase.Root className={styles.root} {...props} />;
}
NavigationMenuRoot.displayName = "OpenLabUINavigationMenuRoot";
export function NavigationMenuList(props: NavigationMenuListProps) {
  return <NavBase.List className={styles.list} {...props} />;
}
NavigationMenuList.displayName = "OpenLabUINavigationMenuList";
export function NavigationMenuItem(props: NavigationMenuItemProps) {
  return <NavBase.Item className={styles.item} {...props} />;
}
NavigationMenuItem.displayName = "OpenLabUINavigationMenuItem";
export function NavigationMenuTrigger(props: NavigationMenuTriggerProps) {
  return <NavBase.Trigger className={styles.trigger} {...props} />;
}
NavigationMenuTrigger.displayName = "OpenLabUINavigationMenuTrigger";
export function NavigationMenuPopup(props: NavigationMenuPopupProps) {
  return <NavBase.Popup className={styles.popup} {...props} />;
}
NavigationMenuPopup.displayName = "OpenLabUINavigationMenuPopup";
export function NavigationMenuViewport(props: NavigationMenuViewportProps) {
  return <NavBase.Viewport className={styles.viewport} {...props} />;
}
NavigationMenuViewport.displayName = "OpenLabUINavigationMenuViewport";
export function NavigationMenuBackdrop(props: NavigationMenuBackdropProps) {
  return <NavBase.Backdrop className={styles.backdrop} {...props} />;
}
NavigationMenuBackdrop.displayName = "OpenLabUINavigationMenuBackdrop";
export function NavigationMenuArrow(props: NavigationMenuArrowProps) {
  return <NavBase.Arrow className={styles.arrow} {...props} />;
}
NavigationMenuArrow.displayName = "OpenLabUINavigationMenuArrow";

export const NavigationMenu = {
  Root: NavigationMenuRoot,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Popup: NavigationMenuPopup,
  Viewport: NavigationMenuViewport,
  Backdrop: NavigationMenuBackdrop,
  Arrow: NavigationMenuArrow,
};
