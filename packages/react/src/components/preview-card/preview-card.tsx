import { PreviewCard as PreviewCardBase } from "@base-ui/react/preview-card";
import * as styles from "@patrick-ui/core/preview-card/preview-card.css";

export type PreviewCardRootProps = PreviewCardBase.Root.Props;
export type PreviewCardTriggerProps = PreviewCardBase.Trigger.Props;
export type PreviewCardPopupProps = PreviewCardBase.Popup.Props;
export type PreviewCardBackdropProps = PreviewCardBase.Backdrop.Props;
export type PreviewCardArrowProps = PreviewCardBase.Arrow.Props;

export function PreviewCardRoot(props: PreviewCardRootProps) {
  return <PreviewCardBase.Root {...props} />;
}
PreviewCardRoot.displayName = "PatrickUIPreviewCardRoot";
export function PreviewCardTrigger(props: PreviewCardTriggerProps) {
  return <PreviewCardBase.Trigger className={styles.root} {...props} />;
}
PreviewCardTrigger.displayName = "PatrickUIPreviewCardTrigger";
export function PreviewCardPopup(props: PreviewCardPopupProps) {
  return <PreviewCardBase.Popup className={styles.popup} {...props} />;
}
PreviewCardPopup.displayName = "PatrickUIPreviewCardPopup";
export function PreviewCardBackdrop(props: PreviewCardBackdropProps) {
  return <PreviewCardBase.Backdrop className={styles.backdrop} {...props} />;
}
PreviewCardBackdrop.displayName = "PatrickUIPreviewCardBackdrop";
export function PreviewCardArrow(props: PreviewCardArrowProps) {
  return <PreviewCardBase.Arrow className={styles.arrow} {...props} />;
}
PreviewCardArrow.displayName = "PatrickUIPreviewCardArrow";

export const PreviewCard = {
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
  Popup: PreviewCardPopup,
  Backdrop: PreviewCardBackdrop,
  Arrow: PreviewCardArrow,
};
