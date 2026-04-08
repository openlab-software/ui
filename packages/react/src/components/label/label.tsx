import * as styles from "@openlab-ui/core/label/label.css";

export function Label(props: React.ComponentProps<"label">) {
  return <label data-slot="label" className={styles.root} {...props} />;
}
