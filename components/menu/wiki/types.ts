export interface IMenuWikiElement{
    label: string;
    elements: IMenuWikiItem[];
}

export interface IMenuWikiItem extends IMenuWikiSubItem{
    isOpen?: boolean;
    elements?: IMenuWikiSubItem[];
}

export interface IMenuWikiSubItem{
    id: number;
    name: string;
    selected?: boolean;
    link: string;
}

export interface IWikiMenu{
    showMobileMenu: boolean;
}
