import { SkillType as TSkillType } from './../types/skill.type';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Certificate, Link } from './general-entitly';

export interface SkillType {
    id: TSkillType;
    name: string;
    data: Skill[];
}

export interface Skill {
    id: number;
    name: string;
    icon: IconDefinition | null;
    shortDescription?: string;
    description?: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Not Rated';
    experience: number;
    subSkills: string[];
    libraries: Link[];
    // yoe: number;
    tags?: string[];
    type: TSkillType;
    hideDetail?: boolean;
    certificates?: Certificate[];
}
