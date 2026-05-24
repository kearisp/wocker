import React, {ComponentProps} from "react";
import {RadioGroup} from "@radix-ui/react-dropdown-menu";


type DropdownMenuRadioGroupProps = ComponentProps<typeof RadioGroup>;

export const DropdownRadioGroup: React.FC<DropdownMenuRadioGroupProps> = (props) => {
    return (
        <RadioGroup
          {...props}
          data-slot="dropdown-menu-radio-group" />
    );
};
