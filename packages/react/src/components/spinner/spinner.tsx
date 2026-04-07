import { Loader2 } from "lucide-react";
import * as styles from "@patrick-ui/core/spinner/spinner.css";

export function Spinner(props: React.ComponentProps<"svg">) {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={styles.root}
      {...props}
    />
  );
}
