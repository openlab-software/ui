import { Autocomplete as AutocompleteBase } from "@base-ui/react/autocomplete";
import * as styles from "@patrick-ui/core/autocomplete/autocomplete.css";

export type AutocompleteRootProps<Value = any> =
  AutocompleteBase.Root.Props<Value>;
export type AutocompleteInputProps = AutocompleteBase.Input.Props;
export type AutocompletePopupProps = AutocompleteBase.Popup.Props;
export type AutocompleteListboxProps = AutocompleteBase.List.Props;
export type AutocompleteItemProps = AutocompleteBase.Item.Props;
export type AutocompleteEmptyProps = AutocompleteBase.Empty.Props;
export type AutocompleteBackdropProps = AutocompleteBase.Backdrop.Props;
export type AutocompleteArrowProps = AutocompleteBase.Arrow.Props;

export function AutocompleteRoot(props: AutocompleteBase.Root.Props<any>) {
  return <AutocompleteBase.Root {...props} />;
}
AutocompleteRoot.displayName = "PatrickUIAutocompleteRoot";

export function AutocompleteInput(props: AutocompleteBase.Input.Props) {
  return <AutocompleteBase.Input className={styles.input} {...props} />;
}
AutocompleteInput.displayName = "PatrickUIAutocompleteInput";

export function AutocompletePopup(props: AutocompleteBase.Popup.Props) {
  return <AutocompleteBase.Popup className={styles.popup} {...props} />;
}
AutocompletePopup.displayName = "PatrickUIAutocompletePopup";

export function AutocompleteListbox(props: AutocompleteBase.List.Props) {
  return <AutocompleteBase.List className={styles.listbox} {...props} />;
}
AutocompleteListbox.displayName = "PatrickUIAutocompleteListbox";

export function AutocompleteItem(props: AutocompleteBase.Item.Props) {
  return <AutocompleteBase.Item className={styles.item} {...props} />;
}
AutocompleteItem.displayName = "PatrickUIAutocompleteItem";

export function AutocompleteEmpty(props: AutocompleteBase.Empty.Props) {
  return <AutocompleteBase.Empty className={styles.empty} {...props} />;
}
AutocompleteEmpty.displayName = "PatrickUIAutocompleteEmpty";

export function AutocompleteBackdrop(props: AutocompleteBase.Backdrop.Props) {
  return <AutocompleteBase.Backdrop className={styles.backdrop} {...props} />;
}
AutocompleteBackdrop.displayName = "PatrickUIAutocompleteBackdrop";

export function AutocompleteArrow(props: AutocompleteBase.Arrow.Props) {
  return <AutocompleteBase.Arrow className={styles.arrow} {...props} />;
}
AutocompleteArrow.displayName = "PatrickUIAutocompleteArrow";

export const Autocomplete = {
  Root: AutocompleteRoot,
  Input: AutocompleteInput,
  Popup: AutocompletePopup,
  Listbox: AutocompleteListbox,
  Item: AutocompleteItem,
  Empty: AutocompleteEmpty,
  Backdrop: AutocompleteBackdrop,
  Arrow: AutocompleteArrow,
};
