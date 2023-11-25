import {ReactNode} from "react";
import {IOnThisPageButton} from "../../buttons/onThisPageButton/types";

export interface ILayoutWiki{
    children?: ReactNode;
    title: string;
    description: string;
    hideHeader?: boolean;
    menuElements: IOnThisPageButton[];
}
