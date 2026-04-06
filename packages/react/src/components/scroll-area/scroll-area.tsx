import { ScrollArea as ScrollAreaBase } from "@base-ui/react/scroll-area";
import * as styles from "@patrick-ui/core/scroll-area/scroll-area.css";

export type ScrollAreaRootProps = ScrollAreaBase.Root.Props;
export type ScrollAreaContentProps = ScrollAreaBase.Content.Props;
export type ScrollAreaScrollbarProps = ScrollAreaBase.Scrollbar.Props;
export type ScrollAreaThumbProps = ScrollAreaBase.Thumb.Props;

export function ScrollAreaRoot(props: ScrollAreaRootProps) {
  return <ScrollAreaBase.Root className={styles.root} {...props} />;
}
ScrollAreaRoot.displayName = "PatrickUIScrollAreaRoot";
export function ScrollAreaContent(props: ScrollAreaContentProps) {
  return <ScrollAreaBase.Content className={styles.content} {...props} />;
}
ScrollAreaContent.displayName = "PatrickUIScrollAreaContent";
export function ScrollAreaScrollbar(props: ScrollAreaScrollbarProps) {
  return <ScrollAreaBase.Scrollbar className={styles.scrollbar} {...props} />;
}
ScrollAreaScrollbar.displayName = "PatrickUIScrollAreaScrollbar";
export function ScrollAreaThumb(props: ScrollAreaThumbProps) {
  return <ScrollAreaBase.Thumb className={styles.thumb} {...props} />;
}
ScrollAreaThumb.displayName = "PatrickUIScrollAreaThumb";

export const ScrollArea = {
  Root: ScrollAreaRoot,
  Content: ScrollAreaContent,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
};
