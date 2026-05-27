import {Popover as Root} from "./Popover";
import {PopoverAnchor} from "./PopoverAnchor";
import {PopoverContent} from "./PopoverContent";
import {PopoverTrigger} from "./PopoverTrigger";


export const Popover = Object.assign(Root, {
    Anchor: PopoverAnchor,
    Content: PopoverContent,
    Trigger: PopoverTrigger
});
