import { Project } from './project.interface';
import { Image } from './image.interface';

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
