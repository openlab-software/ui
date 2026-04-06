import { Input as InputBase, type InputProps } from "@base-ui/react/input";
import * as styles from "@patrick-ui/core/input/input.css";

export type { InputProps };

export function Input(props: InputProps) {
  return <InputBase className={styles.root} {...props} />;
}
Input.displayName = "PatrickUIInput";
export const InputComponent = { Root: Input };
