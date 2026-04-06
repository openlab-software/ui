import { Fieldset as FieldsetBase } from "@base-ui/react/fieldset";
import * as styles from "@patrick-ui/core/fieldset/fieldset.css";

export type FieldsetRootProps = FieldsetBase.Root.Props;
export type FieldsetLegendProps = FieldsetBase.Legend.Props;

export function FieldsetRoot(props: FieldsetRootProps) {
  return <FieldsetBase.Root className={styles.root} {...props} />;
}
FieldsetRoot.displayName = "PatrickUIFieldsetRoot";
export function FieldsetLegend(props: FieldsetLegendProps) {
  return <FieldsetBase.Legend className={styles.legend} {...props} />;
}
FieldsetLegend.displayName = "PatrickUIFieldsetLegend";

export const Fieldset = { Root: FieldsetRoot, Legend: FieldsetLegend };
