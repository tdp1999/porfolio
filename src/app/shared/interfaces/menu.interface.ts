export interface Menu {
    id: number;
    label: string;
    icon?: string;
    route?: string;
    active?: boolean;
    fragment?: string;
    children?: Menu[];
}
