import React, {ComponentProps} from "react";
import {Portal, Content} from "@radix-ui/react-dropdown-menu";


type DropdownMenuContentProps = ComponentProps<typeof Content>;

export const DropdownContent: React.FC<DropdownMenuContentProps> = (props) => {
    const {
        className = "",
        sideOffset = 4,
        ...rest
    } = props;

    return (
        <Portal>
            <Content
              {...rest}
              className={`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border p-1 shadow-md ${className}`}
              sideOffset={sideOffset}
              data-slot="dropdown-menu-content" />
        </Portal>
    );
};
