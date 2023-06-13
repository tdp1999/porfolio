export interface Information {
    label: string;
    value: string;
    templateRef: 'email' | 'phone' | 'link' | 'text';
    metadata?: Record<string, string>;
}

export interface StatsInformation {
    label: string;
    value: number;
}

export interface Experience {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
    technologies: string[];
    location: string;
    clientLocation: string;
    responsibilities: string[];
    teamSize: number;
    achievements: string[];
}
