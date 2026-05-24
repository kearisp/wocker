import React, {ComponentProps} from "react";
import {Portal} from "@radix-ui/react-dropdown-menu";


type DropdownMenuPortalProps = ComponentProps<typeof Portal>;

export const DropdownPortal: React.FC<DropdownMenuPortalProps> = (props) => {
    return (
        <Portal
          {...props}
          data-slot="dropdown-menu-portal" />
    );
};
