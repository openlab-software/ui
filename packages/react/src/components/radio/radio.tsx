import { Radio as RadioBase } from "@base-ui/react/radio";
import * as styles from "@patrick-ui/core/radio-group/radio-group.css";

export type RadioProps = RadioBase.Root.Props;
export type RadioRootProps = RadioBase.Root.Props;
export type RadioIndicatorProps = RadioBase.Indicator.Props;

export function Radio(props: RadioProps) {
  return <RadioBase.Root className={styles.item} {...props} />;
}
Radio.displayName = "PatrickUIRadio";

export function RadioIndicator(props: RadioIndicatorProps) {
  return <RadioBase.Indicator className={styles.indicator} {...props} />;
}
RadioIndicator.displayName = "PatrickUIRadioIndicator";

export const RadioComponent = { Root: Radio, Indicator: RadioIndicator };
