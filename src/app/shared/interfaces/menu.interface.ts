export interface Menu {
    id: number;
    label: string;
    icon?: string;
    route?: string;
    fragment?: string;
    children?: Menu[];
}
