import React, {ComponentProps} from "react";
import {Root} from "@radix-ui/react-popover";


type PopoverProps = ComponentProps<typeof Root>;

export const Popover: React.FC<PopoverProps> = (props) => {
    return (
        <Root
          {...props}
          data-slot="popover" />
    );
};
