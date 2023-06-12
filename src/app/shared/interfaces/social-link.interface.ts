import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface SocialLink {
    id: number;
    label?: string;
    icon: IconDefinition;
    url: string;
}
