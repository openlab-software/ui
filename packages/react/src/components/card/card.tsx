import * as styles from "@openlab-ui/core/card/card.css";

export function Card({
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div data-slot="card" data-size={size} className={styles.root} {...props} />
  );
}

export function CardHeader(props: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={styles.header} {...props} />;
}

export function CardTitle(props: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={styles.title} {...props} />;
}

export function CardDescription(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={styles.description}
      {...props}
    />
  );
}

export function CardAction(props: React.ComponentProps<"div">) {
  return <div data-slot="card-action" className={styles.action} {...props} />;
}

export function CardContent(props: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={styles.content} {...props} />;
}

export function CardFooter(props: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={styles.footer} {...props} />;
}
