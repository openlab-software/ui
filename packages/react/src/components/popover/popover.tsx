import { Popover as PopoverBase } from "@base-ui/react/popover";
import * as styles from "@patrick-ui/core/popover/popover.css";

export type PopoverRootProps = PopoverBase.Root.Props;
export type PopoverTriggerProps = PopoverBase.Trigger.Props;
export type PopoverPopupProps = PopoverBase.Popup.Props;
export type PopoverBackdropProps = PopoverBase.Backdrop.Props;
export type PopoverArrowProps = PopoverBase.Arrow.Props;
export type PopoverTitleProps = PopoverBase.Title.Props;
export type PopoverDescriptionProps = PopoverBase.Description.Props;
export type PopoverCloseProps = PopoverBase.Close.Props;

export function PopoverRoot(props: PopoverRootProps) {
  return <PopoverBase.Root {...props} />;
}
PopoverRoot.displayName = "PatrickUIPopoverRoot";
export function PopoverTrigger(props: PopoverTriggerProps) {
  return <PopoverBase.Trigger className={styles.trigger} {...props} />;
}
PopoverTrigger.displayName = "PatrickUIPopoverTrigger";
export function PopoverPopup(props: PopoverPopupProps) {
  return <PopoverBase.Popup className={styles.popup} {...props} />;
}
PopoverPopup.displayName = "PatrickUIPopoverPopup";
export function PopoverBackdrop(props: PopoverBackdropProps) {
  return <PopoverBase.Backdrop className={styles.backdrop} {...props} />;
}
PopoverBackdrop.displayName = "PatrickUIPopoverBackdrop";
export function PopoverArrow(props: PopoverArrowProps) {
  return <PopoverBase.Arrow className={styles.arrow} {...props} />;
}
PopoverArrow.displayName = "PatrickUIPopoverArrow";
export function PopoverTitle(props: PopoverTitleProps) {
  return <PopoverBase.Title className={styles.title} {...props} />;
}
PopoverTitle.displayName = "PatrickUIPopoverTitle";
export function PopoverDescription(props: PopoverDescriptionProps) {
  return <PopoverBase.Description className={styles.description} {...props} />;
}
PopoverDescription.displayName = "PatrickUIPopoverDescription";
export function PopoverClose(props: PopoverCloseProps) {
  return <PopoverBase.Close className={styles.close} {...props} />;
}
PopoverClose.displayName = "PatrickUIPopoverClose";

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Popup: PopoverPopup,
  Backdrop: PopoverBackdrop,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
};
