import { AlertDialog as AlertDialogBase } from "@base-ui/react/alert-dialog";
import { Button } from "../button/button";
import * as styles from "@patrick-ui/core/alert-dialog/alert-dialog.css";

export function AlertDialog(props: AlertDialogBase.Root.Props) {
  return <AlertDialogBase.Root data-slot="alert-dialog" {...props} />;
}

export function AlertDialogTrigger(props: AlertDialogBase.Trigger.Props) {
  return (
    <AlertDialogBase.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

export function AlertDialogPortal(props: AlertDialogBase.Portal.Props) {
  return <AlertDialogBase.Portal data-slot="alert-dialog-portal" {...props} />;
}

export function AlertDialogOverlay(props: AlertDialogBase.Backdrop.Props) {
  return (
    <AlertDialogBase.Backdrop
      data-slot="alert-dialog-overlay"
      className={styles.backdrop}
      {...props}
    />
  );
}

export function AlertDialogContent({
  size = "default",
  ...props
}: AlertDialogBase.Popup.Props & { size?: "default" | "sm" }) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogBase.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={styles.popup}
        {...props}
      />
    </AlertDialogPortal>
  );
}

export function AlertDialogHeader(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-dialog-header" className={styles.header} {...props} />
  );
}

export function AlertDialogFooter(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-dialog-footer" className={styles.footer} {...props} />
  );
}

export function AlertDialogMedia(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-dialog-media" className={styles.media} {...props} />
  );
}

export function AlertDialogTitle(props: AlertDialogBase.Title.Props) {
  return (
    <AlertDialogBase.Title
      data-slot="alert-dialog-title"
      className={styles.title}
      {...props}
    />
  );
}

export function AlertDialogDescription(
  props: AlertDialogBase.Description.Props,
) {
  return (
    <AlertDialogBase.Description
      data-slot="alert-dialog-description"
      className={styles.description}
      {...props}
    />
  );
}

export function AlertDialogAction(props: React.ComponentProps<typeof Button>) {
  return <Button data-slot="alert-dialog-action" {...props} />;
}

export function AlertDialogCancel({
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogBase.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogBase.Close
      data-slot="alert-dialog-cancel"
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  );
}

export const AlertDialogBackdrop = AlertDialogOverlay;
