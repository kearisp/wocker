import React, {ComponentProps} from "react";
import {Trigger} from "@radix-ui/react-popover";


type TriggerProps = ComponentProps<typeof Trigger>;

export const PopoverTrigger: React.FC<TriggerProps> = (props) => {
    return (
        <Trigger
          {...props}
          data-slot="popover-trigger" />
    );
};
