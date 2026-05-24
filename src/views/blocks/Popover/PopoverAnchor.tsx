import React, {ComponentProps} from "react";
import {Anchor} from "@radix-ui/react-popover";


type PopoverAnchorProps = ComponentProps<typeof Anchor>;

export const PopoverAnchor: React.FC<PopoverAnchorProps> = (props) => {
    return (
        <Anchor
          {...props}
          data-slot="popover-anchor" />
    );
};
