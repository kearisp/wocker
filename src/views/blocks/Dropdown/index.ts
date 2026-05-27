import {Dropdown as Root} from "./Dropdown";
import {DropdownCheckboxItem} from "./DropdownCheckboxItem";
import {DropdownContent} from "./DropdownContent";
import {DropdownGroup} from "./DropdownGroup";
import {DropdownItem} from "./DropdownItem";
import {DropdownLabel} from "./DropdownLabel";
import {DropdownPortal} from "./DropdownPortal";
import {DropdownRadioGroup} from "./DropdownRadioGroup";
import {DropdownRadioItem} from "./DropdownRadioItem";
import {DropdownSeparator} from "./DropdownSeparator";
import {DropdownShortcut} from "./DropdownShortcut";
import {DropdownSub} from "./DropdownSub";
import {DropdownSubContent} from "./DropdownSubContent";
import {DropdownSubTrigger} from "./DropdownSubTrigger";
import {DropdownTrigger} from "./DropdownTrigger";


export const Dropdown = Object.assign(Root, {
    CheckboxItem: DropdownCheckboxItem,
    Content: DropdownContent,
    Group: DropdownGroup,
    Item: DropdownItem,
    Label: DropdownLabel,
    Portal: DropdownPortal,
    RadioGroup: DropdownRadioGroup,
    RadioItem: DropdownRadioItem,
    Separator: DropdownSeparator,
    Shortcut: DropdownShortcut,
    Sub: DropdownSub,
    SubContent: DropdownSubContent,
    SubTrigger: DropdownSubTrigger,
    Trigger: DropdownTrigger
});
