import * as styles from "@patrick-ui/core/alert/alert.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type AlertVariant = NonNullable<RecipeVariants<typeof styles.root>>["variant"];

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
  return <div data-slot="alert-description" className={styles.description} {...props} />;
}

export function AlertAction(props: React.ComponentProps<"div">) {
  return <div data-slot="alert-action" className={styles.action} {...props} />;
}
