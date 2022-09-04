import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, ReactNode, SetStateAction } from "react";

export interface ICustomDialog extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    children: ReactNode
}