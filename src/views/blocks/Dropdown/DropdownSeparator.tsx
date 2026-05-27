import React, {ComponentProps} from "react";
import {Separator} from "@radix-ui/react-dropdown-menu";


type DropdownMenuSeparatorProps = ComponentProps<typeof Separator>;

export const DropdownSeparator: React.FC<DropdownMenuSeparatorProps> = (props) => {
    const {
        className = "",
        ...rest
    } = props;

    return (
         <Separator
           {...rest}
           className={`bg-border -mx-1 my-1 h-px ${className}`}
           data-slot="dropdown-menu-separator" />
    );
};
