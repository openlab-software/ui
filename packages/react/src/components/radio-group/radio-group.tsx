import {
  RadioGroup as RadioGroupBase,
  type RadioGroupProps,
} from "@base-ui/react/radio-group";
import * as styles from "@patrick-ui/core/radio-group/radio-group.css";
export { Radio, RadioIndicator } from "../radio/radio";

export type { RadioGroupProps };

export function RadioGroupRoot(props: RadioGroupProps) {
  return <RadioGroupBase className={styles.root} {...props} />;
}
RadioGroupRoot.displayName = "PatrickUIRadioGroupRoot";

export const RadioGroup = {
  Root: RadioGroupRoot,
};
