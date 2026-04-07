import { Radio as RadioBase } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupBase } from "@base-ui/react/radio-group";
import * as styles from "@patrick-ui/core/radio-group/radio-group.css";

export function RadioGroup(props: RadioGroupBase.Props) {
  return (
    <RadioGroupBase
      data-slot="radio-group"
      className={styles.root}
      {...props}
    />
  );
}

export function RadioGroupItem(props: RadioBase.Root.Props) {
  return (
    <RadioBase.Root
      data-slot="radio-group-item"
      className={styles.item}
      {...props}
    >
      <RadioBase.Indicator
        data-slot="radio-group-indicator"
        className={styles.indicator}
      >
        <span className={styles.indicatorDot} />
      </RadioBase.Indicator>
    </RadioBase.Root>
  );
}
