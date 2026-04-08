import { PreviewCard as PreviewCardBase } from "@base-ui/react/preview-card";
import * as styles from "@openlab-ui/core/preview-card/preview-card.css";

export type PreviewCardRootProps = PreviewCardBase.Root.Props;
export type PreviewCardTriggerProps = PreviewCardBase.Trigger.Props;
export type PreviewCardPopupProps = PreviewCardBase.Popup.Props;
export type PreviewCardBackdropProps = PreviewCardBase.Backdrop.Props;
export type PreviewCardArrowProps = PreviewCardBase.Arrow.Props;

export function PreviewCardRoot(props: PreviewCardRootProps) {
  return <PreviewCardBase.Root {...props} />;
}
PreviewCardRoot.displayName = "OpenLabUIPreviewCardRoot";
export function PreviewCardTrigger(props: PreviewCardTriggerProps) {
  return <PreviewCardBase.Trigger className={styles.root} {...props} />;
}
PreviewCardTrigger.displayName = "OpenLabUIPreviewCardTrigger";
export function PreviewCardPopup(props: PreviewCardPopupProps) {
  return <PreviewCardBase.Popup className={styles.popup} {...props} />;
}
PreviewCardPopup.displayName = "OpenLabUIPreviewCardPopup";
export function PreviewCardBackdrop(props: PreviewCardBackdropProps) {
  return <PreviewCardBase.Backdrop className={styles.backdrop} {...props} />;
}
PreviewCardBackdrop.displayName = "OpenLabUIPreviewCardBackdrop";
export function PreviewCardArrow(props: PreviewCardArrowProps) {
  return <PreviewCardBase.Arrow className={styles.arrow} {...props} />;
}
PreviewCardArrow.displayName = "OpenLabUIPreviewCardArrow";

export const PreviewCard = {
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
  Popup: PreviewCardPopup,
  Backdrop: PreviewCardBackdrop,
  Arrow: PreviewCardArrow,
};
