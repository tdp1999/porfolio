import { Link } from '../../interfaces/general-entitly';

export interface DescriptionListData {
    title: string;
    subtitle: string;
    data: Record<string, string>;
    attatchment?: {
        label: string;
        url: string;
    };
    links?: Record<string, Link>;
}
