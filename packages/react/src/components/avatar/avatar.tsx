import { Avatar as AvatarBase } from "@base-ui/react/avatar";
import * as styles from "@patrick-ui/core/avatar/avatar.css";

export type AvatarRootProps = AvatarBase.Root.Props & { size?: "default" | "sm" | "lg" };
export type AvatarImageProps = AvatarBase.Image.Props;
export type AvatarFallbackProps = AvatarBase.Fallback.Props;

export function AvatarRoot({ size = "default", ...props }: AvatarRootProps) {
  return (
    <AvatarBase.Root
      data-slot="avatar"
      data-size={size}
      className={styles.root}
      {...props}
    />
  );
}
AvatarRoot.displayName = "PatrickUIAvatarRoot";

// Shadcn-compatible alias
export const Avatar = AvatarRoot;

export function AvatarImage(props: AvatarImageProps) {
  return <AvatarBase.Image data-slot="avatar-image" className={styles.image} {...props} />;
}
AvatarImage.displayName = "PatrickUIAvatarImage";

export function AvatarFallback(props: AvatarFallbackProps) {
  return (
    <AvatarBase.Fallback data-slot="avatar-fallback" className={styles.fallback} {...props} />
  );
}
AvatarFallback.displayName = "PatrickUIAvatarFallback";

export function AvatarBadge(props: React.ComponentProps<"span">) {
  return <span data-slot="avatar-badge" className={styles.badge} {...props} />;
}

export function AvatarGroup(props: React.ComponentProps<"div">) {
  return <div data-slot="avatar-group" className={styles.group} {...props} />;
}

export function AvatarGroupCount(props: React.ComponentProps<"div">) {
  return <div data-slot="avatar-group-count" className={styles.groupCount} {...props} />;
}
