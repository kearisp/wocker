import React, {ComponentProps} from "react";
import {Group} from "@radix-ui/react-dropdown-menu";


type DropdownMenuGroupProps = ComponentProps<typeof Group>;

export const DropdownGroup: React.FC<DropdownMenuGroupProps> = (props) => {
    return (
        <Group
          {...props}
          data-slot="dropdown-menu-group" />
    );
};
