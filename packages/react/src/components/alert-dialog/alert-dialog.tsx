import { AlertDialog as AlertDialogBase } from "@base-ui/react/alert-dialog";
import * as styles from "@patrick-ui/core/alert-dialog/alert-dialog.css";

export type AlertDialogRootProps = AlertDialogBase.Root.Props;
export type AlertDialogTriggerProps = AlertDialogBase.Trigger.Props;
export type AlertDialogPopupProps = AlertDialogBase.Popup.Props;
export type AlertDialogBackdropProps = AlertDialogBase.Backdrop.Props;
export type AlertDialogTitleProps = AlertDialogBase.Title.Props;
export type AlertDialogDescriptionProps = AlertDialogBase.Description.Props;
export type AlertDialogCloseProps = AlertDialogBase.Close.Props;

export function AlertDialogRoot(props: AlertDialogRootProps) {
  return <AlertDialogBase.Root {...props} />;
}
AlertDialogRoot.displayName = "PatrickUIAlertDialogRoot";

export function AlertDialogTrigger(props: AlertDialogTriggerProps) {
  return <AlertDialogBase.Trigger className={styles.trigger} {...props} />;
}
AlertDialogTrigger.displayName = "PatrickUIAlertDialogTrigger";

export function AlertDialogPopup(props: AlertDialogPopupProps) {
  return <AlertDialogBase.Popup className={styles.popup} {...props} />;
}
AlertDialogPopup.displayName = "PatrickUIAlertDialogPopup";

export function AlertDialogBackdrop(props: AlertDialogBackdropProps) {
  return <AlertDialogBase.Backdrop className={styles.backdrop} {...props} />;
}
AlertDialogBackdrop.displayName = "PatrickUIAlertDialogBackdrop";

export function AlertDialogTitle(props: AlertDialogTitleProps) {
  return <AlertDialogBase.Title className={styles.title} {...props} />;
}
AlertDialogTitle.displayName = "PatrickUIAlertDialogTitle";

export function AlertDialogDescription(props: AlertDialogDescriptionProps) {
  return <AlertDialogBase.Description className={styles.description} {...props} />;
}
AlertDialogDescription.displayName = "PatrickUIAlertDialogDescription";

export function AlertDialogClose(props: AlertDialogCloseProps) {
  return <AlertDialogBase.Close className={styles.close} {...props} />;
}
AlertDialogClose.displayName = "PatrickUIAlertDialogClose";

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Popup: AlertDialogPopup,
  Backdrop: AlertDialogBackdrop,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Close: AlertDialogClose,
};
