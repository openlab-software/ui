import { Tooltip as TooltipBase } from "@base-ui/react/tooltip";
import * as styles from "@patrick-ui/core/tooltip/tooltip.css";

export type TooltipRootProps = TooltipBase.Root.Props;
export type TooltipTriggerProps = TooltipBase.Trigger.Props;
export type TooltipPopupProps = TooltipBase.Popup.Props;
export type TooltipArrowProps = TooltipBase.Arrow.Props;
export type TooltipProviderProps = TooltipBase.Provider.Props;

export function TooltipRoot(props: TooltipRootProps) {
  return <TooltipBase.Root {...props} />;
}
TooltipRoot.displayName = "PatrickUITooltipRoot";
export function TooltipTrigger(props: TooltipTriggerProps) {
  return <TooltipBase.Trigger className={styles.trigger} {...props} />;
}
TooltipTrigger.displayName = "PatrickUITooltipTrigger";
export function TooltipPopup(props: TooltipPopupProps) {
  return <TooltipBase.Popup className={styles.popup} {...props} />;
}
TooltipPopup.displayName = "PatrickUITooltipPopup";
export function TooltipArrow(props: TooltipArrowProps) {
  return <TooltipBase.Arrow className={styles.arrow} {...props} />;
}
TooltipArrow.displayName = "PatrickUITooltipArrow";
export function TooltipProvider(props: TooltipProviderProps) {
  return <TooltipBase.Provider {...props} />;
}
TooltipProvider.displayName = "PatrickUITooltipProvider";

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
  Provider: TooltipProvider,
};
