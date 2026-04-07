import * as styles from "@patrick-ui/core/textarea/textarea.css";

export type TextareaProps = React.ComponentProps<"textarea">;

export function Textarea(props: TextareaProps) {
  return <textarea data-slot="textarea" className={styles.root} {...props} />;
}
