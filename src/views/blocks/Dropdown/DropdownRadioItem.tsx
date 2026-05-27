import React, {ComponentProps} from "react";
import {Circle} from "lucide-react";
import {RadioItem, ItemIndicator} from "@radix-ui/react-dropdown-menu";


type DropdownMenuRadioItemProps = ComponentProps<typeof RadioItem>;

export const DropdownRadioItem: React.FC<DropdownMenuRadioItemProps> = (props) => {
    const {
        className = "",
        children,
        ...rest
    } = props;

    return (
        <RadioItem
          {...rest}
          className={`focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
          data-slot="dropdown-menu-radio-item">
            <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
                <ItemIndicator>
                    <Circle className="size-2 fill-current" />
                </ItemIndicator>
            </span>

            {children}
        </RadioItem>
    );
};
