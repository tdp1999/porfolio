import { ETag } from '../enums/tag.enum';
import { ProjectCategory, ProjectType, ProjectSize } from '../types/software.type';
import { Datetime, Link } from './general-entity';
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
    startDate: Datetime;
    endDate: Datetime | null;
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
