import { Button as BaseButton } from "@base-ui/react/button";
import type { ButtonVariants } from "@openlab-ui/core/button/button.css";
import * as styles from "@openlab-ui/core/button/button.css";

export type ButtonProps = React.ComponentProps<typeof BaseButton> &
  ButtonVariants;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <BaseButton
      data-slot="button"
      className={styles.button({ variant, size })}
      {...props}
    />
  );
}
Button.displayName = "OpenLabUIButton";

export { styles as buttonStyles };
export type { ButtonVariants };
