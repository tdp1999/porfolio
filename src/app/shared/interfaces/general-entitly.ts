import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Information {
    label: string;
    value: string;
    templateRef: 'email' | 'phone' | 'link' | 'text';
    metadata?: Record<string, string>;
}

export interface Link {
    id?: number;
    url: string;
    label: string;
    hide?: boolean;
    icon?: IconDefinition;
    iconClass?: string;
}

export interface StatsInformation {
    label: string;
    value: number;
}

export interface Certificate {
    name: string;
    description?: string;
    url: string;
}
