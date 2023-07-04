import {
    ProjectCategory,
    ProjectType,
    ProjectSize,
} from '../types/software.type';
import { Link } from './general-entitly';
import { Image } from './image.interface';

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
