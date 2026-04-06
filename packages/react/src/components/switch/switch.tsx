import { Switch as SwitchBase } from "@base-ui/react/switch";
import * as styles from "@patrick-ui/core/switch/switch.css";

export type SwitchRootProps = SwitchBase.Root.Props;
export type SwitchThumbProps = SwitchBase.Thumb.Props;

export function SwitchRoot(props: SwitchRootProps) {
  return <SwitchBase.Root className={styles.root} {...props} />;
}
SwitchRoot.displayName = "PatrickUISwitchRoot";
export function SwitchThumb(props: SwitchThumbProps) {
  return <SwitchBase.Thumb className={styles.thumb} {...props} />;
}
SwitchThumb.displayName = "PatrickUISwitchThumb";

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};
