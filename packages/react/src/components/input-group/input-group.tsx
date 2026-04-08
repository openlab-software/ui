import * as styles from "@openlab-ui/core/input-group/input-group.css";
import type { InputGroupAddonVariants } from "@openlab-ui/core/input-group/input-group.css";
import { Input } from "../input/input";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";

export function InputGroup(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={styles.root}
      {...props}
    />
  );
}

export function InputGroupAddon({
  align = "inline-start",
  onClick,
  ...props
}: React.ComponentProps<"div"> & InputGroupAddonVariants) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={styles.addon({ align })}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        e.currentTarget.parentElement?.querySelector("input")?.focus();
        onClick?.(e);
      }}
      {...props}
    />
  );
}

export function InputGroupText(props: React.ComponentProps<"span">) {
  return <span className={styles.text} {...props} />;
}

export function InputGroupInput(props: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={styles.control}
      {...props}
    />
  );
}

export function InputGroupTextarea(props: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={styles.control}
      {...props}
    />
  );
}

export function InputGroupButton({
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Button>) {
  return <Button variant={variant} {...props} />;
}
