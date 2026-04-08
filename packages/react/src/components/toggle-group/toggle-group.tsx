import React from "react";
import { Toggle as ToggleBase } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupBase } from "@base-ui/react/toggle-group";
import * as styles from "@openlab-ui/core/toggle-group/toggle-group.css";
import * as toggleStyles from "@openlab-ui/core/toggle/toggle.css";
import type { ToggleVariants } from "@openlab-ui/core/toggle/toggle.css";

const ToggleGroupContext = React.createContext<
  ToggleVariants & { spacing?: number; orientation?: "horizontal" | "vertical" }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
});

export function ToggleGroup({
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupBase.Props &
  ToggleVariants & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  }) {
  return (
    <ToggleGroupBase
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      className={styles.root}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupBase>
  );
}

export function ToggleGroupItem({
  variant = "default",
  size = "default",
  ...props
}: ToggleBase.Props & ToggleVariants) {
  const ctx = React.useContext(ToggleGroupContext);
  return (
    <ToggleBase
      data-slot="toggle-group-item"
      data-variant={ctx.variant ?? variant}
      data-size={ctx.size ?? size}
      data-spacing={ctx.spacing}
      className={[
        toggleStyles.toggle({
          variant: ctx.variant ?? variant,
          size: ctx.size ?? size,
        }),
        styles.item,
      ].join(" ")}
      {...props}
    />
  );
}
