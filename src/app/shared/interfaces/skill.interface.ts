import { SkillType as TSkillType } from './../types/skill.type';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface SkillType {
    id: TSkillType;
    name: string;
}

export interface Skill {
    id: number;
    name: string;
    icon: IconDefinition;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    experience: number;
    subSkills: string[];
    libraries: string[];
    // yoe: number;
    tags?: string[];
    type: TSkillType;
}
