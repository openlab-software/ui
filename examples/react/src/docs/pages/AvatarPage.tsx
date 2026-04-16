import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@openlab-ui/react";
import { Page, Section } from "../Section";

const AVATAR_URL = "https://github.com/patrickdevbr.png";

export function AvatarPage() {
  return (
    <Page
      title="Avatar"
      description="An image element with a fallback for representing users or entities."
    >
      <Section
        title="Sizes"
        preview={
          <>
            <Avatar size="sm">
              <AvatarImage src={AVATAR_URL} alt="User" />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage src={AVATAR_URL} alt="User" />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src={AVATAR_URL} alt="User" />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
          </>
        }
        code={`import { Avatar, AvatarImage, AvatarFallback } from "@openlab-ui/react";

<Avatar size="sm">
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>PD</AvatarFallback>
</Avatar>

<Avatar size="default">
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>PD</AvatarFallback>
</Avatar>

<Avatar size="lg">
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>PD</AvatarFallback>
</Avatar>`}
      />

      <Section
        title="Fallback"
        description="Shown when the image fails to load or no src is provided."
        preview={
          <>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
          </>
        }
        code={`<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`}
      />

      <Section
        title="With Badge"
        preview={
          <>
            <Avatar>
              <AvatarImage src={AVATAR_URL} alt="User" />
              <AvatarFallback>PD</AvatarFallback>
              <AvatarBadge />
            </Avatar>
          </>
        }
        code={`import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@openlab-ui/react";

<Avatar>
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>PD</AvatarFallback>
  <AvatarBadge />
</Avatar>`}
      />

      <Section
        title="Group"
        preview={
          <AvatarGroup>
            <Avatar size="sm">
              <AvatarImage src={AVATAR_URL} alt="User 1" />
              <AvatarFallback>A1</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>A2</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>A3</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+4</AvatarGroupCount>
          </AvatarGroup>
        }
        code={`import { AvatarGroup, AvatarGroupCount } from "@openlab-ui/react";

<AvatarGroup>
  <Avatar size="sm">
    <AvatarImage src="..." alt="User 1" />
    <AvatarFallback>A1</AvatarFallback>
  </Avatar>
  <Avatar size="sm">
    <AvatarFallback>A2</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+4</AvatarGroupCount>
</AvatarGroup>`}
      />
    </Page>
  );
}
