import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";


type Props = {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    className?: string;
};

export const Switch: React.FC<Props> = (props) => {
    const {
        className = "",
        checked,
        onCheckedChange
    } = props;

    return (
        <RadixSwitch.Root
          className={`
            relative w-[42px] h-[25px] rounded-full cursor-pointer outline-none
            bg-muted data-[state=checked]:bg-primary transition-colors
            ${className}
          `}
          checked={checked}
          onCheckedChange={onCheckedChange}>
            <RadixSwitch.Thumb
              className={`
                block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5
                will-change-transform data-[state=checked]:translate-x-[19px]
              `} />
        </RadixSwitch.Root>
    );
};
