import { Dialog as DialogBase } from "@base-ui/react/dialog";
import * as styles from "@patrick-ui/core/dialog/dialog.css";

export type DialogRootProps = DialogBase.Root.Props;
export type DialogTriggerProps = DialogBase.Trigger.Props;
export type DialogPopupProps = DialogBase.Popup.Props;
export type DialogBackdropProps = DialogBase.Backdrop.Props;
export type DialogTitleProps = DialogBase.Title.Props;
export type DialogDescriptionProps = DialogBase.Description.Props;
export type DialogCloseProps = DialogBase.Close.Props;

export function DialogRoot(props: DialogRootProps) {
  return <DialogBase.Root {...props} />;
}
DialogRoot.displayName = "PatrickUIDialogRoot";
export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogBase.Trigger className={styles.trigger} {...props} />;
}
DialogTrigger.displayName = "PatrickUIDialogTrigger";
export function DialogPopup(props: DialogPopupProps) {
  return <DialogBase.Popup className={styles.popup} {...props} />;
}
DialogPopup.displayName = "PatrickUIDialogPopup";
export function DialogBackdrop(props: DialogBackdropProps) {
  return <DialogBase.Backdrop className={styles.backdrop} {...props} />;
}
DialogBackdrop.displayName = "PatrickUIDialogBackdrop";
export function DialogTitle(props: DialogTitleProps) {
  return <DialogBase.Title className={styles.title} {...props} />;
}
DialogTitle.displayName = "PatrickUIDialogTitle";
export function DialogDescription(props: DialogDescriptionProps) {
  return <DialogBase.Description className={styles.description} {...props} />;
}
DialogDescription.displayName = "PatrickUIDialogDescription";
export function DialogClose(props: DialogCloseProps) {
  return <DialogBase.Close className={styles.close} {...props} />;
}
DialogClose.displayName = "PatrickUIDialogClose";

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Popup: DialogPopup,
  Backdrop: DialogBackdrop,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
};
