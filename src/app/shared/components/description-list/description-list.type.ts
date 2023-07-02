export interface DescriptionListData {
    title: string;
    subtitle: string;
    data: Record<string, any>;
    attatchment?: {
        label: string;
        url: string;
    };
}
