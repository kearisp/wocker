import React, {ComponentProps} from "react";
import {} from "@radix-ui/react-dropdown-menu";


type DropdownMenuShortcutProps = ComponentProps<"span">;

export const DropdownShortcut: React.FC<DropdownMenuShortcutProps> = (props) => {
    const {
        className = "",
        ...rest
    } = props;

    return (
        <span
          {...rest}
          className={`text-muted-foreground ml-auto text-xs tracking-widest ${className}`}
          data-slot="dropdown-menu-shortcut" />
    );
};
