import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Skill {
    id: number;
    name: string;
    icon: string | IconDefinition;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    experience: number;
    subSkills: string[];
    libraries: string[];
}
