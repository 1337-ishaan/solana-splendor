import {ReactNode} from "react";
import {IHeaderWiki} from "../../header/HeaderWiki/types";

export interface ILayoutWiki extends IHeaderWiki{
    children?: ReactNode;
    title: string;
    description: string;
    hideHeader?: boolean;
}
