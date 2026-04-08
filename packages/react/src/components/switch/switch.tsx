import { Switch as SwitchBase } from "@base-ui/react/switch";
import * as styles from "@openlab-ui/core/switch/switch.css";

export type SwitchProps = SwitchBase.Root.Props & { size?: "default" | "sm" };

export function Switch({ size = "default", ...props }: SwitchProps) {
  return (
    <SwitchBase.Root
      data-slot="switch"
      data-size={size}
      className={styles.root}
      {...props}
    >
      <SwitchBase.Thumb data-slot="switch-thumb" className={styles.thumb} />
    </SwitchBase.Root>
  );
}
Switch.displayName = "OpenLabUISwitch";
