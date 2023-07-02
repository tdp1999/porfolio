import {
    ProjectCategory,
    ProjectSize,
    ProjectType,
} from '../types/software.type';
import { Image } from './image.interface';

export interface Information {
    label: string;
    value: string;
    templateRef: 'email' | 'phone' | 'link' | 'text';
    metadata?: Record<string, string>;
}

export interface Link {
    url: string;
    title: string;
    hide?: boolean;
}

export interface StatsInformation {
    label: string;
    value: number;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    startDate: Date;
    endDate: Date | null;
    projectCategory: ProjectCategory;
    projectType: ProjectType;
    projectSize: ProjectSize;
    mainFunctionality: string[];
    clientDomain?: string;
    clientLocation?: string;
    tags?: string[];
    thumbnail: Image;
    images?: Image[] | null;
    demoLink?: Link;
    sourceCodeLink?: Link;
}

export interface Experience {
    id: number;
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
    teamSize: number | [number, number];
    achievements: string[];
    image: Image;
}
