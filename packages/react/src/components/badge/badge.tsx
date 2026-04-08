import * as styles from "@openlab-ui/core/badge/badge.css";
import type { BadgeVariants } from "@openlab-ui/core/badge/badge.css";

export type { BadgeVariants };

export function Badge({
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & BadgeVariants) {
  return (
    <span data-slot="badge" className={styles.badge({ variant })} {...props} />
  );
}
