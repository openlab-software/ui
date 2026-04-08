import { Toggle as ToggleBase } from "@base-ui/react/toggle";
import * as styles from "@openlab-ui/core/toggle/toggle.css";
import type { ToggleVariants } from "@openlab-ui/core/toggle/toggle.css";

export type ToggleProps = ToggleBase.Props & ToggleVariants;

export function Toggle({
  variant = "default",
  size = "default",
  ...props
}: ToggleProps) {
  return (
    <ToggleBase
      data-slot="toggle"
      className={styles.toggle({ variant, size })}
      {...props}
    />
  );
}
Toggle.displayName = "OpenLabUIToggle";

export { type ToggleVariants };
