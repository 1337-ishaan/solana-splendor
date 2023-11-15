import {ReactNode} from "react";

export interface ILayoutWiki{
    children?: ReactNode;
    title: string;
    description: string;
    hideHeader?: boolean;
}
