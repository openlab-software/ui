import { Combobox as ComboboxBase } from "@base-ui/react/combobox";
import * as styles from "@patrick-ui/core/combobox/combobox.css";

export type ComboboxRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> = ComboboxBase.Root.Props<Value, Multiple>;
export type ComboboxTriggerProps = ComboboxBase.Trigger.Props;
export type ComboboxInputProps = ComboboxBase.Input.Props;
export type ComboboxPopupProps = ComboboxBase.Popup.Props;
export type ComboboxListProps = ComboboxBase.List.Props;
export type ComboboxItemProps = ComboboxBase.Item.Props;
export type ComboboxEmptyProps = ComboboxBase.Empty.Props;
export type ComboboxBackdropProps = ComboboxBase.Backdrop.Props;
export type ComboboxArrowProps = ComboboxBase.Arrow.Props;
export type ComboboxGroupProps = ComboboxBase.Group.Props;
export type ComboboxGroupLabelProps = ComboboxBase.GroupLabel.Props;
export type ComboboxChipProps = ComboboxBase.Chip.Props;

export function ComboboxRoot<
  Value,
  Multiple extends boolean | undefined = false,
>(props: ComboboxRootProps<Value, Multiple>) {
  return <ComboboxBase.Root {...props} />;
}
ComboboxRoot.displayName = "PatrickUIComboboxRoot";

export function ComboboxTrigger(props: ComboboxTriggerProps) {
  return <ComboboxBase.Trigger className={styles.trigger} {...props} />;
}
ComboboxTrigger.displayName = "PatrickUIComboboxTrigger";

export function ComboboxInput(props: ComboboxInputProps) {
  return <ComboboxBase.Input className={styles.input} {...props} />;
}
ComboboxInput.displayName = "PatrickUIComboboxInput";

export function ComboboxPopup(props: ComboboxPopupProps) {
  return <ComboboxBase.Popup className={styles.popup} {...props} />;
}
ComboboxPopup.displayName = "PatrickUIComboboxPopup";

export function ComboboxList(props: ComboboxListProps) {
  return <ComboboxBase.List className={styles.listbox} {...props} />;
}
ComboboxList.displayName = "PatrickUIComboboxList";

export function ComboboxItem(props: ComboboxItemProps) {
  return <ComboboxBase.Item className={styles.item} {...props} />;
}
ComboboxItem.displayName = "PatrickUIComboboxItem";

export function ComboboxEmpty(props: ComboboxEmptyProps) {
  return <ComboboxBase.Empty className={styles.empty} {...props} />;
}
ComboboxEmpty.displayName = "PatrickUIComboboxEmpty";

export function ComboboxBackdrop(props: ComboboxBackdropProps) {
  return <ComboboxBase.Backdrop className={styles.backdrop} {...props} />;
}
ComboboxBackdrop.displayName = "PatrickUIComboboxBackdrop";
export function ComboboxArrow(props: ComboboxArrowProps) {
  return <ComboboxBase.Arrow className={styles.arrow} {...props} />;
}
ComboboxArrow.displayName = "PatrickUIComboboxArrow";

export function ComboboxGroup(props: ComboboxGroupProps) {
  return <ComboboxBase.Group className={styles.group} {...props} />;
}
ComboboxGroup.displayName = "PatrickUIComboboxGroup";

export function ComboboxGroupLabel(props: ComboboxGroupLabelProps) {
  return <ComboboxBase.GroupLabel className={styles.groupLabel} {...props} />;
}
ComboboxGroupLabel.displayName = "PatrickUIComboboxGroupLabel";

export const Combobox = {
  Root: ComboboxRoot,
  Trigger: ComboboxTrigger,
  Input: ComboboxInput,
  Popup: ComboboxPopup,
  List: ComboboxList,
  Item: ComboboxItem,
  Empty: ComboboxEmpty,
  Backdrop: ComboboxBackdrop,
  Arrow: ComboboxArrow,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
};
