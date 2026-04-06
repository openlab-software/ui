import { Progress as ProgressBase } from "@base-ui/react/progress";
import * as styles from "@patrick-ui/core/progress/progress.css";

export type ProgressRootProps = ProgressBase.Root.Props;
export type ProgressTrackProps = ProgressBase.Track.Props;
export type ProgressIndicatorProps = ProgressBase.Indicator.Props;
export type ProgressValueProps = ProgressBase.Value.Props;
export type ProgressLabelProps = ProgressBase.Label.Props;

export function ProgressRoot(props: ProgressRootProps) {
  return <ProgressBase.Root className={styles.root} {...props} />;
}
ProgressRoot.displayName = "PatrickUIProgressRoot";
export function ProgressTrack(props: ProgressTrackProps) {
  return <ProgressBase.Track className={styles.track} {...props} />;
}
ProgressTrack.displayName = "PatrickUIProgressTrack";
export function ProgressIndicator(props: ProgressIndicatorProps) {
  return <ProgressBase.Indicator className={styles.indicator} {...props} />;
}
ProgressIndicator.displayName = "PatrickUIProgressIndicator";
export function ProgressValue(props: ProgressValueProps) {
  return <ProgressBase.Value className={styles.valueText} {...props} />;
}
ProgressValue.displayName = "PatrickUIProgressValue";
export function ProgressLabel(props: ProgressLabelProps) {
  return <ProgressBase.Label className={styles.label} {...props} />;
}
ProgressLabel.displayName = "PatrickUIProgressLabel";

export const Progress = {
  Root: ProgressRoot,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
  Value: ProgressValue,
  Label: ProgressLabel,
};
