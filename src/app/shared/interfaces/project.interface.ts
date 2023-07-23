import { ETag } from '../enums/tag.enum';
import {
    ProjectCategory,
    ProjectType,
    ProjectSize,
} from '../types/software.type';
import { Link } from './general-entitly';
import { Image } from './image.interface';

export interface ProjectTagDescription {
    id: ETag;
    label: string;
    description?: string;
    class?: string;
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
    tags?: ProjectTagDescription[];
    thumbnail?: Image;
    images?: Image[] | null;
    demoLink?: Link;
    sourceCodeLink?: Link;
}
