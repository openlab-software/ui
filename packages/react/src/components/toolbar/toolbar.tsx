import { Toolbar as ToolbarBase } from "@base-ui/react/toolbar";
import * as styles from "@openlab-ui/core/toolbar/toolbar.css";

export type ToolbarRootProps = ToolbarBase.Root.Props;
export type ToolbarButtonProps = ToolbarBase.Button.Props;
export type ToolbarSeparatorProps = ToolbarBase.Separator.Props;
export type ToolbarGroupProps = ToolbarBase.Group.Props;
export type ToolbarInputProps = ToolbarBase.Input.Props;
export type ToolbarLinkProps = ToolbarBase.Link.Props;

export function ToolbarRoot(props: ToolbarRootProps) {
  return <ToolbarBase.Root {...props} />;
}
ToolbarRoot.displayName = "OpenLabUIToolbarRoot";
export function ToolbarButton(props: ToolbarButtonProps) {
  return <ToolbarBase.Button className={styles.button} {...props} />;
}
ToolbarButton.displayName = "OpenLabUIToolbarButton";
export function ToolbarSeparator(props: ToolbarSeparatorProps) {
  return <ToolbarBase.Separator className={styles.separator} {...props} />;
}
ToolbarSeparator.displayName = "OpenLabUIToolbarSeparator";
export function ToolbarGroup(props: ToolbarGroupProps) {
  return <ToolbarBase.Group {...props} />;
}
ToolbarGroup.displayName = "OpenLabUIToolbarGroup";
export function ToolbarInput(props: ToolbarInputProps) {
  return <ToolbarBase.Input className={styles.button} {...props} />;
}
ToolbarInput.displayName = "OpenLabUIToolbarInput";
export function ToolbarLink(props: ToolbarLinkProps) {
  return <ToolbarBase.Link {...props} />;
}
ToolbarLink.displayName = "OpenLabUIToolbarLink";

export const Toolbar = {
  Root: ToolbarRoot,
  Button: ToolbarButton,
  Separator: ToolbarSeparator,
  Group: ToolbarGroup,
  Input: ToolbarInput,
  Link: ToolbarLink,
};
