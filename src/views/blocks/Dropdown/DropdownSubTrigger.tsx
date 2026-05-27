import React, {ComponentProps} from "react";
import {ChevronRight} from "lucide-react";
import {SubTrigger} from "@radix-ui/react-dropdown-menu";


type DropdownMenuSubTriggerProps = ComponentProps<typeof SubTrigger> & {
    inset?: boolean;
};

export const DropdownSubTrigger: React.FC<DropdownMenuSubTriggerProps> = (props) => {
    const {
        className = "",
        inset,
        children,
        ...rest
    } = props;

    return (
        <SubTrigger
          {...rest}
          className={`focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-inset:pl-8 data-disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
          data-slot="dropdown-menu-sub-trigger"
          data-inset={inset}>
            {children}

            <ChevronRight className="ml-auto size-4" />
        </SubTrigger>
    );
};
