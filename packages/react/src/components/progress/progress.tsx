import { Progress as ProgressBase } from "@base-ui/react/progress";
import * as styles from "@openlab-ui/core/progress/progress.css";

export function Progress({
  children,
  value,
  ...props
}: ProgressBase.Root.Props) {
  return (
    <ProgressBase.Root
      value={value}
      data-slot="progress"
      className={styles.root}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressBase.Root>
  );
}

export function ProgressTrack(props: ProgressBase.Track.Props) {
  return (
    <ProgressBase.Track
      data-slot="progress-track"
      className={styles.track}
      {...props}
    />
  );
}

export function ProgressIndicator(props: ProgressBase.Indicator.Props) {
  return (
    <ProgressBase.Indicator
      data-slot="progress-indicator"
      className={styles.indicator}
      {...props}
    />
  );
}

export function ProgressLabel(props: ProgressBase.Label.Props) {
  return (
    <ProgressBase.Label
      data-slot="progress-label"
      className={styles.label}
      {...props}
    />
  );
}

export function ProgressValue(props: ProgressBase.Value.Props) {
  return (
    <ProgressBase.Value
      data-slot="progress-value"
      className={styles.value}
      {...props}
    />
  );
}
