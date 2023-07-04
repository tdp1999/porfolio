export interface DescriptionListData {
    title: string;
    subtitle: string;
    data: Record<string, string>;
    attatchment?: {
        label: string;
        url: string;
    };
}
