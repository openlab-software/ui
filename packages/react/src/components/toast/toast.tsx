import { Toast as ToastBase } from "@base-ui/react/toast";
import * as styles from "@openlab-ui/core/toast/toast.css";

export type ToastRootProps = ToastBase.Root.Props;
export type ToastTitleProps = ToastBase.Title.Props;
export type ToastDescriptionProps = ToastBase.Description.Props;
export type ToastCloseProps = ToastBase.Close.Props;
export type ToastActionProps = ToastBase.Action.Props;
export type ToastProviderProps = ToastBase.Provider.Props;
export type ToastArrowProps = ToastBase.Arrow.Props;

export function ToastRoot(props: ToastRootProps) {
  return <ToastBase.Root className={styles.root} {...props} />;
}
ToastRoot.displayName = "OpenLabUIToastRoot";
export function ToastTitle(props: ToastTitleProps) {
  return <ToastBase.Title className={styles.title} {...props} />;
}
ToastTitle.displayName = "OpenLabUIToastTitle";
export function ToastDescription(props: ToastDescriptionProps) {
  return <ToastBase.Description className={styles.description} {...props} />;
}
ToastDescription.displayName = "OpenLabUIToastDescription";
export function ToastClose(props: ToastCloseProps) {
  return <ToastBase.Close className={styles.close} {...props} />;
}
ToastClose.displayName = "OpenLabUIToastClose";
export function ToastAction(props: ToastActionProps) {
  return <ToastBase.Action className={styles.action} {...props} />;
}
ToastAction.displayName = "OpenLabUIToastAction";
export function ToastProvider(props: ToastProviderProps) {
  return <ToastBase.Provider {...props} />;
}
ToastProvider.displayName = "OpenLabUIToastProvider";
export function ToastArrow(props: ToastArrowProps) {
  return <ToastBase.Arrow className={styles.arrow} {...props} />;
}
ToastArrow.displayName = "OpenLabUIToastArrow";

export const Toast = {
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Action: ToastAction,
  Provider: ToastProvider,
  Arrow: ToastArrow,
};
