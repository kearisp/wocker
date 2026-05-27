import React, {ComponentProps} from "react";
import {Root} from "@radix-ui/react-dropdown-menu";


type DropdownMenuProps = ComponentProps<typeof Root>;

export const Dropdown: React.FC<DropdownMenuProps> = (props) => {
    return (
        <Root
          {...props}
          modal={false}
          data-slot="dropdown-menu" />
    );
};
