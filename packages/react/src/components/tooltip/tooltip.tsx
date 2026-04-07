import { Tooltip as TooltipBase } from "@base-ui/react/tooltip";
import * as styles from "@patrick-ui/core/tooltip/tooltip.css";

export function TooltipProvider({
  delay = 0,
  ...props
}: TooltipBase.Provider.Props) {
  return (
    <TooltipBase.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

export function Tooltip(props: TooltipBase.Root.Props) {
  return <TooltipBase.Root data-slot="tooltip" {...props} />;
}

export function TooltipTrigger(props: TooltipBase.Trigger.Props) {
  return <TooltipBase.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipContent({
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipBase.Popup.Props &
  Pick<
    TooltipBase.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipBase.Portal>
      <TooltipBase.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={styles.positioner}
      >
        <TooltipBase.Popup
          data-slot="tooltip-content"
          className={styles.popup}
          {...props}
        >
          {children}
          <TooltipBase.Arrow className={styles.arrow} />
        </TooltipBase.Popup>
      </TooltipBase.Positioner>
    </TooltipBase.Portal>
  );
}
