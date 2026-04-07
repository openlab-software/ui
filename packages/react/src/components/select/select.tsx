import { Select as SelectBase } from "@base-ui/react/select";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "lucide-react";
import * as styles from "@patrick-ui/core/select/select.css";

const Select = SelectBase.Root;
export { Select };

export function SelectGroup(props: SelectBase.Group.Props) {
  return (
    <SelectBase.Group
      data-slot="select-group"
      className={styles.group}
      {...props}
    />
  );
}

export function SelectValue(props: SelectBase.Value.Props) {
  return (
    <SelectBase.Value
      data-slot="select-value"
      className={styles.value}
      {...props}
    />
  );
}

export function SelectTrigger({
  size = "default",
  children,
  ...props
}: SelectBase.Trigger.Props & { size?: "default" | "sm" }) {
  return (
    <SelectBase.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={styles.trigger}
      {...props}
    >
      {children}
      <SelectBase.Icon
        render={
          <ChevronDownIcon
            style={{
              pointerEvents: "none",
              width: "1rem",
              height: "1rem",
              color: "var(--muted-foreground)",
            }}
          />
        }
      />
    </SelectBase.Trigger>
  );
}

export function SelectContent({
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectBase.Popup.Props &
  Pick<
    SelectBase.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectBase.Portal>
      <SelectBase.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className={styles.positioner}
      >
        <SelectBase.Popup
          data-slot="select-content"
          className={styles.popup}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectBase.List className={styles.list}>{children}</SelectBase.List>
          <SelectScrollDownButton />
        </SelectBase.Popup>
      </SelectBase.Positioner>
    </SelectBase.Portal>
  );
}

export function SelectLabel(props: SelectBase.GroupLabel.Props) {
  return (
    <SelectBase.GroupLabel
      data-slot="select-label"
      className={styles.label}
      {...props}
    />
  );
}

export function SelectItem({ children, ...props }: SelectBase.Item.Props) {
  return (
    <SelectBase.Item data-slot="select-item" className={styles.item} {...props}>
      <SelectBase.ItemText className={styles.itemText}>
        {children}
      </SelectBase.ItemText>
      <SelectBase.ItemIndicator
        render={<span className={styles.itemIndicator} />}
      >
        <CheckIcon style={{ pointerEvents: "none" }} />
      </SelectBase.ItemIndicator>
    </SelectBase.Item>
  );
}

export function SelectSeparator(props: SelectBase.Separator.Props) {
  return (
    <SelectBase.Separator
      data-slot="select-separator"
      className={styles.separator}
      {...props}
    />
  );
}

export function SelectScrollUpButton(
  props: React.ComponentProps<typeof SelectBase.ScrollUpArrow>,
) {
  return (
    <SelectBase.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={styles.scrollButton}
      {...props}
    >
      <ChevronUpIcon />
    </SelectBase.ScrollUpArrow>
  );
}

export function SelectScrollDownButton(
  props: React.ComponentProps<typeof SelectBase.ScrollDownArrow>,
) {
  return (
    <SelectBase.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={styles.scrollButton}
      {...props}
    >
      <ChevronDownIcon />
    </SelectBase.ScrollDownArrow>
  );
}
