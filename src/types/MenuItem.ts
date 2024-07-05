export type MenuItem = {
    label: string;
    to: string;
    new?: boolean;
    deprecated?: boolean;
    children?: MenuItem[];
};