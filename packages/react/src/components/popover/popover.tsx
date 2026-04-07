import { Popover as PopoverBase } from "@base-ui/react/popover";
import * as styles from "@patrick-ui/core/popover/popover.css";

export function Popover(props: PopoverBase.Root.Props) {
  return <PopoverBase.Root data-slot="popover" {...props} />;
}

export function PopoverTrigger(props: PopoverBase.Trigger.Props) {
  return <PopoverBase.Trigger data-slot="popover-trigger" {...props} />;
}

export function PopoverContent({
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverBase.Popup.Props &
  Pick<
    PopoverBase.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PopoverBase.Portal>
      <PopoverBase.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={styles.positioner}
      >
        <PopoverBase.Popup
          data-slot="popover-content"
          className={styles.popup}
          {...props}
        />
      </PopoverBase.Positioner>
    </PopoverBase.Portal>
  );
}

export function PopoverHeader(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="popover-header" className={styles.header} {...props} />
  );
}

export function PopoverTitle(props: PopoverBase.Title.Props) {
  return (
    <PopoverBase.Title
      data-slot="popover-title"
      className={styles.title}
      {...props}
    />
  );
}

export function PopoverDescription(props: PopoverBase.Description.Props) {
  return (
    <PopoverBase.Description
      data-slot="popover-description"
      className={styles.description}
      {...props}
    />
  );
}
