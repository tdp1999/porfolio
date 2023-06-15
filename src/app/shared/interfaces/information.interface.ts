import { ProjectSize, ProjectType } from '../types/software.type';

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

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    startDate: Date;
    endDate: Date | null;
    projectType: ProjectType;
    projectSize: ProjectSize;
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
    clientDomain: string;
    project: Project[];
    responsibilities: string[];
    teamSize: number;
    achievements: string[];
}
