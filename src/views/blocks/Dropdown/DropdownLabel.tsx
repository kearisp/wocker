import React, {ComponentProps} from "react";
import {Label} from "@radix-ui/react-dropdown-menu";


type DropdownMenuLabelProps = ComponentProps<typeof Label> & {
    inset?: boolean
};

export const DropdownLabel: React.FC<DropdownMenuLabelProps> = (props) => {
    const {
        className = "",
        inset,
        ...rest
    } = props

    return (
        <Label
          {...rest}
          className={`px-2 py-1.5 text-sm font-medium data-inset:pl-8 ${className}`}
          data-slot="dropdown-menu-label"
          data-inset={inset} />
    );
};
