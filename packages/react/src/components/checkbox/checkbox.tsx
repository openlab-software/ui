import { Checkbox as CheckboxBase } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import * as styles from "@patrick-ui/core/checkbox/checkbox.css";

export type CheckboxProps = CheckboxBase.Root.Props;

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxBase.Root data-slot="checkbox" className={styles.root} {...props}>
      <CheckboxBase.Indicator
        data-slot="checkbox-indicator"
        className={styles.indicator}
      >
        <CheckIcon />
      </CheckboxBase.Indicator>
    </CheckboxBase.Root>
  );
}
Checkbox.displayName = "PatrickUICheckbox";
