import type { AlertVariant } from "@openlab-ui/core/alert/alert.css";
import * as styles from "@openlab-ui/core/alert/alert.css";

export function Alert({
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: AlertVariant }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={styles.root({ variant })}
      {...props}
    />
  );
}

export function AlertTitle(props: React.ComponentProps<"div">) {
  return <div data-slot="alert-title" className={styles.title} {...props} />;
}

export function AlertDescription(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={styles.description}
      {...props}
    />
  );
}

export function AlertAction(props: React.ComponentProps<"div">) {
  return <div data-slot="alert-action" className={styles.action} {...props} />;
}
