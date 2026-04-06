import { Checkbox as CheckboxBase } from "@base-ui/react/checkbox";
import * as styles from "@patrick-ui/core/checkbox/checkbox.css";

export type CheckboxRootProps = CheckboxBase.Root.Props;
export type CheckboxIndicatorProps = CheckboxBase.Indicator.Props;
export type CheckboxLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function CheckboxRoot(props: CheckboxRootProps) {
  return <CheckboxBase.Root className={styles.root} {...props} />;
}
CheckboxRoot.displayName = "PatrickUICheckbox";

export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  return <CheckboxBase.Indicator className={styles.indicator} {...props} />;
}
CheckboxIndicator.displayName = "PatrickUICheckboxIndicator";

export function CheckboxLabel(props: CheckboxLabelProps) {
  return <label className={styles.label} {...props} />;
}
CheckboxLabel.displayName = "PatrickUICheckboxLabel";

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  iconClass: styles.icon,
};
