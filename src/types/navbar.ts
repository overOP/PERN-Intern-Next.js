import { ReactNode } from "react";

export interface  desktopProps {
    text: string;
}
export interface iconProps {
    searchOpen: boolean;
    onToggleSearch: () => void;
    search: string;
    wishlist: string;
    profile: string;
    cart: string;
}
export interface burgerProps {
    onToggle: () => void;
    icon: ReactNode;
}
export interface searchProps {
    value: string;
    onChange: (v: string) => void;
}
export interface navBarProps {
    open: boolean;
    onToggle: () => void;
}