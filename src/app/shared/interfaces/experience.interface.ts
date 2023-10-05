import { Project } from './project.interface';
import { Image } from './image.interface';
import { Datetime } from './general-entity';

export interface Experience {
    id: number;
    company: string;
    position: string;
    startDate: Datetime;
    endDate: Datetime | null;
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
