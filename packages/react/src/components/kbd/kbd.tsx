import * as styles from "@openlab-ui/core/kbd/kbd.css";

export function Kbd(props: React.ComponentProps<"kbd">) {
  return <kbd data-slot="kbd" className={styles.root} {...props} />;
}

export function KbdGroup(props: React.ComponentProps<"div">) {
  return <kbd data-slot="kbd-group" className={styles.group} {...props} />;
}
