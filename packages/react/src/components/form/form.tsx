import { Form as FormBase, type FormProps } from "@base-ui/react/form";
import * as styles from "@openlab-ui/core/form/form.css";

export type { FormProps };

export function Form(props: FormProps) {
  return <FormBase className={styles.root} {...props} />;
}
Form.displayName = "OpenLabUIForm";
