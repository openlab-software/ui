import { Input as InputBase } from "@base-ui/react/input";
import * as styles from "@openlab-ui/core/input/input.css";

export type InputProps = React.ComponentProps<"input">;

export function Input({ type, className, ...props }: InputProps) {
  return (
    <InputBase
      type={type}
      data-slot="input"
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
Input.displayName = "OpenLabUIInput";
