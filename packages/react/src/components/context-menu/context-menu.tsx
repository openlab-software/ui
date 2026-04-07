import { ContextMenu as ContextMenuBase } from "@base-ui/react/context-menu";
import * as styles from "@patrick-ui/core/context-menu/context-menu.css";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { type ComponentProps } from "react";

export type ContextMenuProps = ContextMenuBase.Root.Props;
export type ContextMenuPortalProps = ContextMenuBase.Portal.Props;
export type ContextMenuTriggerProps = ContextMenuBase.Trigger.Props;

export interface ContextMenuCheckboxItemProps extends Omit<
  ContextMenuBase.CheckboxItem.Props,
  "className"
> {
  inset?: boolean;
}

export interface ContextMenuItemProps extends Omit<
  ContextMenuBase.Item.Props,
  "className" | "data-variant"
> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

export type ContextMenuGroupProps = ContextMenuBase.Group.Props;
export type ContextMenuGroupLabelProps = ContextMenuBase.GroupLabel.Props;
export type ContextMenuRadioGroupProps = ContextMenuBase.RadioGroup.Props;

export interface ContextMenuRadioItemProps extends Omit<
  ContextMenuBase.RadioItem.Props,
  "className"
> {
  inset?: boolean;
}

export type ContextMenuSeparatorProps = ContextMenuBase.Separator.Props;
export type ContextMenuShortcutProps = ComponentProps<"span">;

export type ContextMenuSubProps = ContextMenuBase.SubmenuRoot.Props;

export interface ContextMenuSubTriggerProps extends Omit<
  ContextMenuBase.SubmenuTrigger.Props,
  "className"
> {
  inset?: boolean;
}

export interface ContextMenuContentProps extends ContextMenuBase.Popup.Props {
  align?: Parameters<typeof ContextMenuBase.Positioner>[0]["align"];
  alignOffset?: Parameters<typeof ContextMenuBase.Positioner>[0]["alignOffset"];
  side?: Parameters<typeof ContextMenuBase.Positioner>[0]["side"];
  sideOffset?: Parameters<typeof ContextMenuBase.Positioner>[0]["sideOffset"];
}

export function ContextMenu({ ...props }: ContextMenuProps) {
  return <ContextMenuBase.Root data-slot="context-menu" {...props} />;
}
ContextMenu.displayName = "PatrickUIContextMenu";

export function ContextMenuPortal({ ...props }: ContextMenuPortalProps) {
  return <ContextMenuBase.Portal data-slot="context-menu-portal" {...props} />;
}
ContextMenuPortal.displayName = "PatrickUIContextMenuPortal";

export function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuTriggerProps) {
  return (
    <ContextMenuBase.Trigger
      data-slot="context-menu-trigger"
      className={styles.trigger}
      {...props}
    />
  );
}
ContextMenuTrigger.displayName = "PatrickUIContextMenuTrigger";

export function ContextMenuContent({
  align = "start",
  alignOffset = 4,
  className,
  side = "right",
  sideOffset = 0,
  ...props
}: ContextMenuContentProps) {
  return (
    <ContextMenuBase.Portal>
      <ContextMenuBase.Positioner
        className={styles.positioner}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuBase.Popup
          data-slot="context-menu-content"
          className={styles.popup}
          {...props}
        />
      </ContextMenuBase.Positioner>
    </ContextMenuBase.Portal>
  );
}
ContextMenuContent.displayName = "PatrickUIContextMenuContent";

export function ContextMenuGroup({ ...props }: ContextMenuGroupProps) {
  return <ContextMenuBase.Group data-slot="context-menu-group" {...props} />;
}
ContextMenuGroup.displayName = "PatrickUIContextMenuGroup";

export function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuGroupLabelProps & { inset?: boolean }) {
  return (
    <ContextMenuBase.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={styles.label}
      {...props}
    />
  );
}
ContextMenuLabel.displayName = "PatrickUIContextMenuLabel";

export function ContextMenuItem({
  inset,
  variant = "default",
  ...props
}: ContextMenuItemProps) {
  return (
    <ContextMenuBase.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={styles.itemVariant({ variant })}
      {...props}
    />
  );
}
ContextMenuItem.displayName = "PatrickUIContextMenuItem";

export function ContextMenuSub({ ...props }: ContextMenuSubProps) {
  return (
    <ContextMenuBase.SubmenuRoot data-slot="context-menu-sub" {...props} />
  );
}
ContextMenuSub.displayName = "PatrickUIContextMenuSub";

export function ContextMenuSubTrigger({
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  return (
    <ContextMenuBase.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={styles.subTrigger}
      {...props}
    >
      {children}
      <ChevronRightIcon style={{ marginLeft: "auto" }} />
    </ContextMenuBase.SubmenuTrigger>
  );
}
ContextMenuSubTrigger.displayName = "PatrickUIContextMenuSubTrigger";

export function ContextMenuSubContent(
  props: ComponentProps<typeof ContextMenuContent>,
) {
  return <ContextMenuContent side="right" {...props} />;
}
ContextMenuSubContent.displayName = "PatrickUIContextMenuSubContent";

export function ContextMenuCheckboxItem({
  children,
  inset,
  ...props
}: ContextMenuCheckboxItemProps) {
  return (
    <ContextMenuBase.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={styles.checkboxItem}
      {...props}
    >
      <span className={styles.checkboxIndicatorWrapper}>
        <ContextMenuBase.CheckboxItemIndicator>
          <CheckIcon />
        </ContextMenuBase.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuBase.CheckboxItem>
  );
}
ContextMenuCheckboxItem.displayName = "PatrickUIContextMenuCheckboxItem";

export function ContextMenuRadioGroup({
  ...props
}: ContextMenuRadioGroupProps) {
  return (
    <ContextMenuBase.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}
ContextMenuRadioGroup.displayName = "PatrickUIContextMenuRadioGroup";

export function ContextMenuRadioItem({
  children,
  inset,
  ...props
}: ContextMenuRadioItemProps) {
  return (
    <ContextMenuBase.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={styles.radioItem}
      {...props}
    >
      <span className={styles.radioIndicatorWrapper}>
        <ContextMenuBase.RadioItemIndicator>
          <CheckIcon />
        </ContextMenuBase.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuBase.RadioItem>
  );
}
ContextMenuRadioItem.displayName = "PatrickUIContextMenuRadioItem";

export function ContextMenuSeparator({ ...props }: ContextMenuSeparatorProps) {
  return (
    <ContextMenuBase.Separator
      data-slot="context-menu-separator"
      className={styles.separator}
      {...props}
    />
  );
}
ContextMenuSeparator.displayName = "PatrickUIContextMenuSeparator";

export function ContextMenuShortcut({
  className,
  style,
  ...props
}: ContextMenuShortcutProps) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={styles.shortcut}
      style={style}
      {...props}
    />
  );
}
ContextMenuShortcut.displayName = "PatrickUIContextMenuShortcut";

export function ContextMenuArrow(props: ContextMenuBase.Arrow.Props) {
  return <ContextMenuBase.Arrow {...props} />;
}
ContextMenuArrow.displayName = "PatrickUIContextMenuArrow";

export function ContextMenuBackdrop(props: ContextMenuBase.Backdrop.Props) {
  return <ContextMenuBase.Backdrop {...props} />;
}
ContextMenuBackdrop.displayName = "PatrickUIContextMenuBackdrop";
