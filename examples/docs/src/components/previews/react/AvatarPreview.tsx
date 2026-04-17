import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@openlab-ui/react";
import { ReactPreviewProvider } from "../../ReactPreviewProvider";

export function AvatarBasic() {
  return (
    <ReactPreviewProvider>
      <Avatar>
        <AvatarImage src="https://github.com/patrickdevbr.png" alt="Patrick" />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </ReactPreviewProvider>
  );
}

export function AvatarSizes() {
  return (
    <ReactPreviewProvider>
      <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
    </ReactPreviewProvider>
  );
}

export function AvatarGroupDemo() {
  return (
    <ReactPreviewProvider>
      <AvatarGroup>
        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
        <AvatarGroupCount>+5</AvatarGroupCount>
      </AvatarGroup>
    </ReactPreviewProvider>
  );
}
