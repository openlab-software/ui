import { Slider as SliderBase } from "@base-ui/react/slider";
import * as styles from "@patrick-ui/core/slider/slider.css";

export type SliderRootProps = SliderBase.Root.Props;
export type SliderTrackProps = SliderBase.Track.Props;
export type SliderThumbProps = SliderBase.Thumb.Props;
export type SliderControlProps = SliderBase.Control.Props;
export type SliderLabelProps = SliderBase.Label.Props;
export type SliderValueProps = SliderBase.Value.Props;
export type SliderIndicatorProps = SliderBase.Indicator.Props;

export function SliderRoot(props: SliderRootProps) {
  return <SliderBase.Root className={styles.root} {...props} />;
}
SliderRoot.displayName = "PatrickUISliderRoot";
export function SliderTrack(props: SliderTrackProps) {
  return <SliderBase.Track className={styles.track} {...props} />;
}
SliderTrack.displayName = "PatrickUISliderTrack";
export function SliderThumb(props: SliderThumbProps) {
  return <SliderBase.Thumb className={styles.thumb} {...props} />;
}
SliderThumb.displayName = "PatrickUISliderThumb";
export function SliderControl(props: SliderControlProps) {
  return <SliderBase.Control className={styles.control} {...props} />;
}
SliderControl.displayName = "PatrickUISliderControl";
export function SliderLabel(props: SliderLabelProps) {
  return <SliderBase.Label className={styles.root} {...props} />;
}
SliderLabel.displayName = "PatrickUISliderLabel";
export function SliderValue(props: SliderValueProps) {
  return <SliderBase.Value className={styles.root} {...props} />;
}
SliderValue.displayName = "PatrickUISliderValue";

export const Slider = {
  Root: SliderRoot,
  Track: SliderTrack,
  Thumb: SliderThumb,
  Control: SliderControl,
  Label: SliderLabel,
  Value: SliderValue,
};
