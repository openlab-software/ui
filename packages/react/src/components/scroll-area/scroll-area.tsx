import { ScrollArea as ScrollAreaBase } from "@base-ui/react/scroll-area";
import * as styles from "@openlab-ui/core/scroll-area/scroll-area.css";

export function ScrollArea({ children, ...props }: ScrollAreaBase.Root.Props) {
  return (
    <ScrollAreaBase.Root
      data-slot="scroll-area"
      className={styles.root}
      {...props}
    >
      <ScrollAreaBase.Viewport
        data-slot="scroll-area-viewport"
        className={styles.viewport}
      >
        {children}
      </ScrollAreaBase.Viewport>
      <ScrollBar />
      <ScrollAreaBase.Corner />
    </ScrollAreaBase.Root>
  );
}

export function ScrollBar({
  orientation = "vertical",
  ...props
}: ScrollAreaBase.Scrollbar.Props) {
  return (
    <ScrollAreaBase.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={styles.scrollbar}
      {...props}
    >
      <ScrollAreaBase.Thumb
        data-slot="scroll-area-thumb"
        className={styles.thumb}
      />
    </ScrollAreaBase.Scrollbar>
  );
}
