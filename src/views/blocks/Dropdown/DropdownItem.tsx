import React, {ComponentProps} from "react";
import {Item} from "@radix-ui/react-dropdown-menu";


type DropdownMenuItemProps = ComponentProps<typeof Item> & {
    inset?: boolean
    variant?: "default" | "destructive"
};

export const DropdownItem: React.FC<DropdownMenuItemProps> = (props) => {
    const {
        className = "",
        inset,
        variant = "default",
        ...rest
    } = props;

    return (
        <Item
          {...rest}
          className={`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
          data-slot="dropdown-menu-item"
          data-inset={inset}
          data-variant={variant} />
    );
};
