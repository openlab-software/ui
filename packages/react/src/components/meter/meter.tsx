import { Meter as MeterBase } from "@base-ui/react/meter";
import * as styles from "@openlab-ui/core/meter/meter.css";

export type MeterRootProps = MeterBase.Root.Props;
export type MeterTrackProps = MeterBase.Track.Props;
export type MeterIndicatorProps = MeterBase.Indicator.Props;
export type MeterValueProps = MeterBase.Value.Props;
export type MeterLabelProps = MeterBase.Label.Props;

export function MeterRoot(props: MeterRootProps) {
  return <MeterBase.Root className={styles.root} {...props} />;
}
MeterRoot.displayName = "OpenLabUIMeterRoot";
export function MeterTrack(props: MeterTrackProps) {
  return <MeterBase.Track className={styles.track} {...props} />;
}
MeterTrack.displayName = "OpenLabUIMeterTrack";
export function MeterIndicator(props: MeterIndicatorProps) {
  return <MeterBase.Indicator className={styles.indicator} {...props} />;
}
MeterIndicator.displayName = "OpenLabUIMeterIndicator";
export function MeterValue(props: MeterValueProps) {
  return <MeterBase.Value className={styles.valueText} {...props} />;
}
MeterValue.displayName = "OpenLabUIMeterValue";
export function MeterLabel(props: MeterLabelProps) {
  return <MeterBase.Label className={styles.label} {...props} />;
}
MeterLabel.displayName = "OpenLabUIMeterLabel";

export const Meter = {
  Root: MeterRoot,
  Track: MeterTrack,
  Indicator: MeterIndicator,
  Value: MeterValue,
  Label: MeterLabel,
};
