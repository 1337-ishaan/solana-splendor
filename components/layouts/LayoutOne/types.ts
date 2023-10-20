import {ReactNode} from "react";

export interface ILayoutOne{
    children?: ReactNode;
    title: string;
    description: string;
    hideFooter?: boolean;
    hideHeader?: boolean;
}
