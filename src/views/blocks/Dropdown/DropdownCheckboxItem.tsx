import React, {ComponentProps} from "react";
import {Check} from "lucide-react";
import {CheckboxItem, ItemIndicator} from "@radix-ui/react-dropdown-menu";


type DropdownMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>;

export const DropdownCheckboxItem: React.FC<DropdownMenuCheckboxItemProps> = (props) => {
    const {
        className = "",
        children,
        checked,
        ...rest
    } = props;

    return (
        <CheckboxItem
          {...rest}
          className={`focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
          checked={checked}
          data-slot="dropdown-menu-checkbox-item">
            <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
                <ItemIndicator>
                    <Check className="size-4" />
                </ItemIndicator>
            </span>

            {children}
        </CheckboxItem>
    );
};
