import { type CheckboxGroupProps } from "@base-ui/react/checkbox-group";
import * as CheckboxBase from "@base-ui/react/checkbox-group";
import * as styles from "@openlab-ui/core/checkbox-group/checkbox-group.css";

export type { CheckboxGroupProps };

export function CheckboxGroup(props: CheckboxGroupProps) {
  return <CheckboxBase.CheckboxGroup className={styles.root} {...props} />;
}
CheckboxGroup.displayName = "OpenLabUICheckboxGroup";
export * from "../checkbox/checkbox";
