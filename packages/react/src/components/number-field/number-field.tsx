import { NumberField as NumberFieldBase } from "@base-ui/react/number-field";
import * as styles from "@patrick-ui/core/number-field/number-field.css";

export type NumberFieldRootProps = NumberFieldBase.Root.Props;
export type NumberFieldGroupProps = NumberFieldBase.Group.Props;
export type NumberFieldIncrementProps = NumberFieldBase.Increment.Props;
export type NumberFieldDecrementProps = NumberFieldBase.Decrement.Props;
export type NumberFieldInputProps = NumberFieldBase.Input.Props;

export function NumberFieldRoot(props: NumberFieldRootProps) {
  return <NumberFieldBase.Root className={styles.root} {...props} />;
}
NumberFieldRoot.displayName = "PatrickUINumberFieldRoot";
export function NumberFieldGroup(props: NumberFieldGroupProps) {
  return <NumberFieldBase.Group className={styles.group} {...props} />;
}
NumberFieldGroup.displayName = "PatrickUINumberFieldGroup";
export function NumberFieldIncrement(props: NumberFieldIncrementProps) {
  return <NumberFieldBase.Increment className={styles.increment} {...props} />;
}
NumberFieldIncrement.displayName = "PatrickUINumberFieldIncrement";
export function NumberFieldDecrement(props: NumberFieldDecrementProps) {
  return <NumberFieldBase.Decrement className={styles.decrement} {...props} />;
}
NumberFieldDecrement.displayName = "PatrickUINumberFieldDecrement";
export function NumberFieldInput(props: NumberFieldInputProps) {
  return <NumberFieldBase.Input className={styles.input} {...props} />;
}
NumberFieldInput.displayName = "PatrickUINumberFieldInput";

export const NumberField = {
  Root: NumberFieldRoot,
  Group: NumberFieldGroup,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
  Input: NumberFieldInput,
};
