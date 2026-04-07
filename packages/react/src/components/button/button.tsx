import { Button as BaseButton } from "@base-ui/react/button";
import type { ButtonVariants } from "@patrick-ui/core/button/button.css";
import * as styles from "@patrick-ui/core/button/button.css";

export type ButtonProps = React.ComponentProps<typeof BaseButton> & ButtonVariants;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <BaseButton
      data-slot="button"
      className={styles.button({ variant, size })}
      {...props}
    />
  );
}
Button.displayName = "PatrickUIButton";

export { styles as buttonStyles };
export type { ButtonVariants };
