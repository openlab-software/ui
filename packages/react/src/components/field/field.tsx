import { Field as FieldBase } from "@base-ui/react/field";
import * as styles from "@patrick-ui/core/field/field.css";

export type FieldRootProps = FieldBase.Root.Props;
export type FieldLabelProps = FieldBase.Label.Props;
export type FieldErrorProps = FieldBase.Error.Props;
export type FieldDescriptionProps = FieldBase.Description.Props;

export function FieldRoot(props: FieldRootProps) {
  return <FieldBase.Root {...props} />;
}
FieldRoot.displayName = "PatrickUIFieldRoot";
export function FieldLabel(props: FieldLabelProps) {
  return <FieldBase.Label {...props} />;
}
FieldLabel.displayName = "PatrickUIFieldLabel";
export function FieldError(props: FieldErrorProps) {
  return <FieldBase.Error {...props} />;
}
FieldError.displayName = "PatrickUIFieldError";
export function FieldDescription(props: FieldDescriptionProps) {
  return <FieldBase.Description {...props} />;
}
FieldDescription.displayName = "PatrickUIFieldDescription";
export function FieldInput(props: Parameters<typeof FieldBase.Control>[0]) {
  return <FieldBase.Control className={styles.input()} {...props} />;
}
FieldInput.displayName = "PatrickUIFieldInput";

export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Error: FieldError,
  Description: FieldDescription,
  Input: FieldInput,
};
