import { Slider as SliderBase } from "@base-ui/react/slider";
import * as styles from "@patrick-ui/core/slider/slider.css";

export type SliderProps = SliderBase.Root.Props;

export function Slider({
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max];

  return (
    <SliderBase.Root
      data-slot="slider"
      className={styles.root}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderBase.Control className={styles.control}>
        <SliderBase.Track data-slot="slider-track" className={styles.track}>
          <SliderBase.Indicator
            data-slot="slider-range"
            className={styles.indicator}
          />
        </SliderBase.Track>
        {Array.from({ length: _values.length }, (_, i) => (
          <SliderBase.Thumb
            key={i}
            data-slot="slider-thumb"
            className={styles.thumb}
          />
        ))}
      </SliderBase.Control>
    </SliderBase.Root>
  );
}
Slider.displayName = "PatrickUISlider";
