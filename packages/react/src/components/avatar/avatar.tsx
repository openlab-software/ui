import { Avatar as AvatarBase } from "@base-ui/react/avatar";

import * as styles from "@patrick-ui/core/avatar/avatar.css";

export type AvatarRootProps = AvatarBase.Root.Props;
export type AvatarImageProps = AvatarBase.Image.Props;
export type AvatarFallbackProps = AvatarBase.Fallback.Props;

export function AvatarRoot(props: AvatarRootProps) {
  return <AvatarBase.Root className={styles.root} {...props} />;
}
AvatarRoot.displayName = "PatrickUIAvatarRoot";

export function AvatarImage(props: AvatarImageProps) {
  return <AvatarBase.Image className={styles.image} {...props} />;
}
AvatarImage.displayName = "PatrickUIAvatarImage";

export function AvatarFallback(props: AvatarFallbackProps) {
  return <AvatarBase.Fallback className={styles.fallback} {...props} />;
}
AvatarFallback.displayName = "PatrickUIAvatarFallback";

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
};
