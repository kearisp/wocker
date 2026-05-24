import React, {ComponentProps} from "react";
import {Trigger} from "@radix-ui/react-dropdown-menu";


type DropdownMenuTriggerProps = ComponentProps<typeof Trigger>;

export const DropdownTrigger: React.FC<DropdownMenuTriggerProps> = (props) => {
    const {
        className = "",
        ...rest
    } = props;

    return (
        <Trigger
          {...rest}
          className={`cursor-pointer ${className}`}
          data-slot="dropdown-menu-trigger" />
    );
};
