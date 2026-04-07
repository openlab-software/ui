import { Input as InputBase } from "@base-ui/react/input";
import * as styles from "@patrick-ui/core/input/input.css";

export type InputProps = React.ComponentProps<"input">;

export function Input({ type, ...props }: InputProps) {
  return (
    <InputBase
      type={type}
      data-slot="input"
      className={styles.root}
      {...props}
    />
  );
}
Input.displayName = "PatrickUIInput";
