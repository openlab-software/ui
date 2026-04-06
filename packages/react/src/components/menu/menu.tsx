import { Menu as MenuBase } from "@base-ui/react/menu";
import * as styles from "@patrick-ui/core/menu/menu.css";

export type MenuRootProps = MenuBase.Root.Props;
export type MenuTriggerProps = MenuBase.Trigger.Props;
export type MenuPopupProps = MenuBase.Popup.Props;
export type MenuBackdropProps = MenuBase.Backdrop.Props;
export type MenuItemProps = MenuBase.Item.Props;
export type MenuLinkItemProps = MenuBase.LinkItem.Props;
export type MenuCheckboxItemProps = MenuBase.CheckboxItem.Props;
export type MenuRadioItemProps = MenuBase.RadioItem.Props;
export type MenuGroupProps = MenuBase.Group.Props;
export type MenuGroupLabelProps = MenuBase.GroupLabel.Props;
export type MenuArrowProps = MenuBase.Arrow.Props;

export function MenuRoot(props: MenuRootProps) {
  return <MenuBase.Root {...props} />;
}
MenuRoot.displayName = "PatrickUIMenuRoot";
export function MenuTrigger(props: MenuTriggerProps) {
  return <MenuBase.Trigger className={styles.root} {...props} />;
}
MenuTrigger.displayName = "PatrickUIMenuTrigger";
export function MenuPopup(props: MenuPopupProps) {
  return <MenuBase.Popup className={styles.popup} {...props} />;
}
MenuPopup.displayName = "PatrickUIMenuPopup";
export function MenuBackdrop(props: MenuBackdropProps) {
  return <MenuBase.Backdrop className={styles.popup} {...props} />;
}
MenuBackdrop.displayName = "PatrickUIMenuBackdrop";
export function MenuItem(props: MenuItemProps) {
  return <MenuBase.Item className={styles.item} {...props} />;
}
MenuItem.displayName = "PatrickUIMenuItem";
export function MenuLinkItem(props: MenuLinkItemProps) {
  return <MenuBase.LinkItem className={styles.item} {...props} />;
}
MenuLinkItem.displayName = "PatrickUIMenuLinkItem";
export function MenuCheckboxItem(props: MenuCheckboxItemProps) {
  return <MenuBase.CheckboxItem className={styles.item} {...props} />;
}
MenuCheckboxItem.displayName = "PatrickUIMenuCheckboxItem";
export function MenuRadioItem(props: MenuRadioItemProps) {
  return <MenuBase.RadioItem className={styles.item} {...props} />;
}
MenuRadioItem.displayName = "PatrickUIMenuRadioItem";
export function MenuGroup(props: MenuGroupProps) {
  return <MenuBase.Group className={styles.group} {...props} />;
}
MenuGroup.displayName = "PatrickUIMenuGroup";
export function MenuGroupLabel(props: MenuGroupLabelProps) {
  return <MenuBase.GroupLabel className={styles.groupLabel} {...props} />;
}
MenuGroupLabel.displayName = "PatrickUIMenuGroupLabel";
export function MenuArrow(props: MenuArrowProps) {
  return <MenuBase.Arrow className={styles.arrow} {...props} />;
}
MenuArrow.displayName = "PatrickUIMenuArrow";

export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Popup: MenuPopup,
  Backdrop: MenuBackdrop,
  Item: MenuItem,
  LinkItem: MenuLinkItem,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Arrow: MenuArrow,
};
