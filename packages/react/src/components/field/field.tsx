import { useMemo } from "react";
import * as styles from "@patrick-ui/core/field/field.css";
import { Label } from "../label/label";
import { Separator } from "../separator/separator";
import type {
  FieldOrientation,
  FieldLegendVariants,
} from "@patrick-ui/core/field/field.css";

export function FieldSet(props: React.ComponentProps<"fieldset">) {
  return (
    <fieldset data-slot="field-set" className={styles.fieldSet} {...props} />
  );
}

export function FieldLegend({
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={styles.fieldLegend({ variant })}
      {...props}
    />
  );
}

export function FieldGroup(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="field-group" className={styles.fieldGroup} {...props} />
  );
}

export function Field({
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & FieldOrientation) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={styles.field({ orientation })}
      {...props}
    />
  );
}

export function FieldContent(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="field-content" className={styles.fieldContent} {...props} />
  );
}

export function FieldLabel(props: React.ComponentProps<typeof Label>) {
  return (
    <Label data-slot="field-label" className={styles.fieldLabel} {...props} />
  );
}

export function FieldTitle(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="field-label" className={styles.fieldTitle} {...props} />
  );
}

export function FieldDescription(props: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={styles.fieldDescription}
      {...props}
    />
  );
}

export function FieldSeparator({
  children,
  ...props
}: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={styles.fieldSeparator}
      {...props}
    >
      <Separator style={{ position: "absolute", inset: 0, top: "50%" }} />
      {children && (
        <span
          data-slot="field-separator-content"
          className={styles.fieldSeparatorContent}
        >
          {children}
        </span>
      )}
    </div>
  );
}

export function FieldError({
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) return children;
    if (!errors?.length) return null;
    const unique = [...new Map(errors.map((e) => [e?.message, e])).values()];
    if (unique.length === 1) return unique[0]?.message;
    return (
      <ul
        style={{
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          listStyle: "disc",
        }}
      >
        {unique.map((e, i) => e?.message && <li key={i}>{e.message}</li>)}
      </ul>
    );
  }, [children, errors]);

  if (!content) return null;

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={styles.fieldError}
      {...props}
    >
      {content}
    </div>
  );
}
