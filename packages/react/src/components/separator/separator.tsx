import { Separator as SeparatorBase, type SeparatorProps } from "@base-ui/react/separator";
import * as styles from "@patrick-ui/core/separator/separator.css";

export type { SeparatorProps };

export function Separator(props: SeparatorProps) {
  return <SeparatorBase className={styles.root} {...props} />;
}
Separator.displayName = "PatrickUISeparator";
