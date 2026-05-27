import React, {ComponentProps} from "react";
import {Sub} from "@radix-ui/react-dropdown-menu";


type DropdownMenuSubProps = ComponentProps<typeof Sub>;

export const DropdownSub: React.FC<DropdownMenuSubProps> = (props) => {
    return (
        <Sub
          {...props}
          data-slot="dropdown-menu-sub" />
    );
};
