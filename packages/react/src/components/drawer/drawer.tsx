import { Drawer as DrawerBase } from "@base-ui/react/drawer";
import * as styles from "@openlab-ui/core/drawer/drawer.css";

export type DrawerRootProps = DrawerBase.Root.Props;
export type DrawerTriggerProps = DrawerBase.Trigger.Props;
export type DrawerPopupProps = DrawerBase.Popup.Props;
export type DrawerOverlayProps = DrawerBase.Backdrop.Props;
export type DrawerTitleProps = DrawerBase.Title.Props;
export type DrawerDescriptionProps = DrawerBase.Description.Props;
export type DrawerCloseProps = DrawerBase.Close.Props;

export function DrawerRoot(props: DrawerRootProps) {
  return <DrawerBase.Root {...props} />;
}
DrawerRoot.displayName = "OpenLabUIDrawerRoot";
export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerBase.Trigger className={styles.trigger} {...props} />;
}
DrawerTrigger.displayName = "OpenLabUIDrawerTrigger";
export function DrawerPopup(props: DrawerPopupProps) {
  return <DrawerBase.Popup className={styles.popup} {...props} />;
}
DrawerPopup.displayName = "OpenLabUIDrawerPopup";
export function DrawerOverlay(props: DrawerOverlayProps) {
  return <DrawerBase.Backdrop className={styles.overlay} {...props} />;
}
DrawerOverlay.displayName = "OpenLabUIDrawerOverlay";
export function DrawerTitle(props: DrawerTitleProps) {
  return <DrawerBase.Title className={styles.title} {...props} />;
}
DrawerTitle.displayName = "OpenLabUIDrawerTitle";
export function DrawerDescription(props: DrawerDescriptionProps) {
  return <DrawerBase.Description className={styles.description} {...props} />;
}
DrawerDescription.displayName = "OpenLabUIDrawerDescription";
export function DrawerClose(props: DrawerCloseProps) {
  return <DrawerBase.Close className={styles.close} {...props} />;
}
DrawerClose.displayName = "OpenLabUIDrawerClose";

export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Popup: DrawerPopup,
  Overlay: DrawerOverlay,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Close: DrawerClose,
};
