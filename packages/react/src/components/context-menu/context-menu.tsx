import { ContextMenu as ContextMenuBase } from "@base-ui/react/context-menu";
import * as styles from "@patrick-ui/core/context-menu/context-menu.css";

export type ContextMenuRootProps = ContextMenuBase.Root.Props;
export type ContextMenuTriggerProps = ContextMenuBase.Trigger.Props;
export type ContextMenuPopupProps = ContextMenuBase.Popup.Props;
export type ContextMenuBackdropProps = ContextMenuBase.Backdrop.Props;
export type ContextMenuItemProps = ContextMenuBase.Item.Props;
export type ContextMenuCheckboxItemProps = ContextMenuBase.CheckboxItem.Props;
export type ContextMenuArrowProps = ContextMenuBase.Arrow.Props;
export type ContextMenuGroupProps = ContextMenuBase.Group.Props;
export type ContextMenuGroupLabelProps = ContextMenuBase.GroupLabel.Props;

export function ContextMenuRoot(props: ContextMenuRootProps) {
  return <ContextMenuBase.Root {...props} />;
}
ContextMenuRoot.displayName = "PatrickUIContextMenuRoot";
export function ContextMenuTrigger(props: ContextMenuTriggerProps) {
  return <ContextMenuBase.Trigger className={styles.trigger} {...props} />;
}
ContextMenuTrigger.displayName = "PatrickUIContextMenuTrigger";

export function ContextMenuPopup(props: ContextMenuPopupProps) {
  return <ContextMenuBase.Popup className={styles.popup} {...props} />;
}
ContextMenuPopup.displayName = "PatrickUIContextMenuPopup";

export function ContextMenuBackdrop(props: ContextMenuBackdropProps) {
  return <ContextMenuBase.Backdrop {...props} />;
}
ContextMenuBackdrop.displayName = "PatrickUIContextMenuBackdrop";

export function ContextMenuItem(props: ContextMenuItemProps) {
  return <ContextMenuBase.Item className={styles.item} {...props} />;
}
ContextMenuItem.displayName = "PatrickUIContextMenuItem";

export function ContextMenuCheckboxItem(props: ContextMenuCheckboxItemProps) {
  return <ContextMenuBase.CheckboxItem {...props} />;
}
ContextMenuCheckboxItem.displayName = "PatrickUIContextMenuCheckboxItem";

export function ContextMenuArrow(props: ContextMenuArrowProps) {
  return <ContextMenuBase.Arrow {...props} />;
}
ContextMenuArrow.displayName = "PatrickUIContextMenuArrow";

export function ContextMenuGroup(props: ContextMenuGroupProps) {
  return <ContextMenuBase.Group {...props} />;
}
ContextMenuGroup.displayName = "PatrickUIContextMenuGroup";

export function ContextMenuGroupLabel(props: ContextMenuGroupLabelProps) {
  return <ContextMenuBase.GroupLabel {...props} />;
}
ContextMenuGroupLabel.displayName = "PatrickUIContextMenuGroupLabel";

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Popup: ContextMenuPopup,
  Backdrop: ContextMenuBackdrop,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  Arrow: ContextMenuArrow,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
};
