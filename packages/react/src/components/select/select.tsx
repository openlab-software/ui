import { Select as SelectBase } from "@base-ui/react/select";
import * as styles from "@patrick-ui/core/select/select.css";

export type SelectRootProps = SelectBase.Root.Props<any>;
export type SelectTriggerProps = SelectBase.Trigger.Props;
export type SelectPopupProps = SelectBase.Popup.Props;
export type SelectListProps = SelectBase.List.Props;
export type SelectItemProps = SelectBase.Item.Props;
export type SelectItemTextProps = SelectBase.ItemText.Props;
export type SelectItemIndicatorProps = SelectBase.ItemIndicator.Props;
export type SelectBackdropProps = SelectBase.Backdrop.Props;
export type SelectArrowProps = SelectBase.Arrow.Props;
export type SelectGroupProps = SelectBase.Group.Props;
export type SelectGroupLabelProps = SelectBase.GroupLabel.Props;

export function SelectRoot(props: SelectRootProps) {
  return <SelectBase.Root {...props} />;
}
SelectRoot.displayName = "PatrickUISelectRoot";
export function SelectTrigger(props: SelectTriggerProps) {
  return <SelectBase.Trigger className={styles.trigger} {...props} />;
}
SelectTrigger.displayName = "PatrickUISelectTrigger";
export function SelectPopup(props: SelectPopupProps) {
  return <SelectBase.Popup className={styles.popup} {...props} />;
}
SelectPopup.displayName = "PatrickUISelectPopup";
export function SelectList(props: SelectListProps) {
  return <SelectBase.List className={styles.popup} {...props} />;
}
SelectList.displayName = "PatrickUISelectList";
export function SelectItem(props: SelectItemProps) {
  return <SelectBase.Item className={styles.trigger} {...props} />;
}
SelectItem.displayName = "PatrickUISelectItem";
export function SelectItemText(props: SelectItemTextProps) {
  return <SelectBase.ItemText className={styles.popup} {...props} />;
}
SelectItemText.displayName = "PatrickUISelectItemText";
export function SelectItemIndicator(props: SelectItemIndicatorProps) {
  return <SelectBase.ItemIndicator className={styles.popup} {...props} />;
}
SelectItemIndicator.displayName = "PatrickUISelectItemIndicator";
export function SelectBackdrop(props: SelectBackdropProps) {
  return <SelectBase.Backdrop className={styles.backdrop} {...props} />;
}
SelectBackdrop.displayName = "PatrickUISelectBackdrop";
export function SelectArrow(props: SelectArrowProps) {
  return <SelectBase.Arrow className={styles.arrow} {...props} />;
}
SelectArrow.displayName = "PatrickUISelectArrow";
export function SelectGroup(props: SelectGroupProps) {
  return <SelectBase.Group className={styles.popup} {...props} />;
}
SelectGroup.displayName = "PatrickUISelectGroup";
export function SelectGroupLabel(props: SelectGroupLabelProps) {
  return <SelectBase.GroupLabel className={styles.popup} {...props} />;
}
SelectGroupLabel.displayName = "PatrickUISelectGroupLabel";

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Popup: SelectPopup,
  List: SelectList,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  Backdrop: SelectBackdrop,
  Arrow: SelectArrow,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
};
