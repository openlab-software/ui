import { Dialog as DialogBase } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { Button } from "../button/button";
import * as styles from "@patrick-ui/core/dialog/dialog.css";

export function Dialog(props: DialogBase.Root.Props) {
  return <DialogBase.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger(props: DialogBase.Trigger.Props) {
  return <DialogBase.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogPortal(props: DialogBase.Portal.Props) {
  return <DialogBase.Portal data-slot="dialog-portal" {...props} />;
}

export function DialogClose(props: DialogBase.Close.Props) {
  return <DialogBase.Close data-slot="dialog-close" {...props} />;
}

export function DialogOverlay(props: DialogBase.Backdrop.Props) {
  return (
    <DialogBase.Backdrop
      data-slot="dialog-overlay"
      className={styles.backdrop}
      {...props}
    />
  );
}

export function DialogContent({
  children,
  showCloseButton = true,
  ...props
}: DialogBase.Popup.Props & { showCloseButton?: boolean }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogBase.Popup
        data-slot="dialog-content"
        className={styles.popup}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogBase.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                style={{ position: "absolute", top: "1rem", right: "1rem" }}
              />
            }
          >
            <XIcon />
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              Close
            </span>
          </DialogBase.Close>
        )}
      </DialogBase.Popup>
    </DialogPortal>
  );
}

export function DialogHeader(props: React.ComponentProps<"div">) {
  return <div data-slot="dialog-header" className={styles.header} {...props} />;
}

export function DialogFooter({
  children,
  showCloseButton = false,
  ...props
}: React.ComponentProps<"div"> & { showCloseButton?: boolean }) {
  return (
    <div data-slot="dialog-footer" className={styles.footer} {...props}>
      {children}
      {showCloseButton && (
        <DialogBase.Close render={<Button variant="outline" />}>
          Close
        </DialogBase.Close>
      )}
    </div>
  );
}

export function DialogTitle(props: DialogBase.Title.Props) {
  return (
    <DialogBase.Title
      data-slot="dialog-title"
      className={styles.title}
      {...props}
    />
  );
}

export function DialogDescription(props: DialogBase.Description.Props) {
  return (
    <DialogBase.Description
      data-slot="dialog-description"
      className={styles.description}
      {...props}
    />
  );
}

export const DialogBackdrop = DialogOverlay;
