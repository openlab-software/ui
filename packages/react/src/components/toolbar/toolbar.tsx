import { Toolbar as ToolbarBase } from "@base-ui/react/toolbar";
import * as styles from "@patrick-ui/core/toolbar/toolbar.css";

export type ToolbarRootProps = ToolbarBase.Root.Props;
export type ToolbarButtonProps = ToolbarBase.Button.Props;
export type ToolbarSeparatorProps = ToolbarBase.Separator.Props;
export type ToolbarGroupProps = ToolbarBase.Group.Props;
export type ToolbarInputProps = ToolbarBase.Input.Props;
export type ToolbarLinkProps = ToolbarBase.Link.Props;

export function ToolbarRoot(props: ToolbarRootProps) {
  return <ToolbarBase.Root {...props} />;
}
ToolbarRoot.displayName = "PatrickUIToolbarRoot";
export function ToolbarButton(props: ToolbarButtonProps) {
  return <ToolbarBase.Button className={styles.button} {...props} />;
}
ToolbarButton.displayName = "PatrickUIToolbarButton";
export function ToolbarSeparator(props: ToolbarSeparatorProps) {
  return <ToolbarBase.Separator className={styles.separator} {...props} />;
}
ToolbarSeparator.displayName = "PatrickUIToolbarSeparator";
export function ToolbarGroup(props: ToolbarGroupProps) {
  return <ToolbarBase.Group {...props} />;
}
ToolbarGroup.displayName = "PatrickUIToolbarGroup";
export function ToolbarInput(props: ToolbarInputProps) {
  return <ToolbarBase.Input className={styles.button} {...props} />;
}
ToolbarInput.displayName = "PatrickUIToolbarInput";
export function ToolbarLink(props: ToolbarLinkProps) {
  return <ToolbarBase.Link {...props} />;
}
ToolbarLink.displayName = "PatrickUIToolbarLink";

export const Toolbar = {
  Root: ToolbarRoot,
  Button: ToolbarButton,
  Separator: ToolbarSeparator,
  Group: ToolbarGroup,
  Input: ToolbarInput,
  Link: ToolbarLink,
};
