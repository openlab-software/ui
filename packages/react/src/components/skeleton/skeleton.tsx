import * as styles from "@patrick-ui/core/skeleton/skeleton.css";

export function Skeleton(props: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" className={styles.root} {...props} />;
}
