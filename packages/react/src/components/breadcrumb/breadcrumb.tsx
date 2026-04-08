import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as styles from "@openlab-ui/core/breadcrumb/breadcrumb.css";

export function Breadcrumb(props: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={styles.root}
      {...props}
    />
  );
}

export function BreadcrumbList(props: React.ComponentProps<"ol">) {
  return <ol data-slot="breadcrumb-list" className={styles.list} {...props} />;
}

export function BreadcrumbItem(props: React.ComponentProps<"li">) {
  return <li data-slot="breadcrumb-item" className={styles.item} {...props} />;
}

export function BreadcrumbLink(props: React.ComponentProps<"a">) {
  return <a data-slot="breadcrumb-link" className={styles.link} {...props} />;
}

export function BreadcrumbPage(props: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={styles.page}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={styles.separator}
      {...props}
    >
      {children ?? (
        <ChevronRight style={{ width: "0.875rem", height: "0.875rem" }} />
      )}
    </li>
  );
}

export function BreadcrumbEllipsis(props: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={styles.ellipsis}
      {...props}
    >
      <MoreHorizontal style={{ width: "1rem", height: "1rem" }} />
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
        }}
      >
        More
      </span>
    </span>
  );
}
