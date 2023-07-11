import {
    faAngular,
    faCss3,
    faCss3Alt,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { Skill, SkillType } from '../interfaces/skill.interface';

export const TechnicalSkills: Skill[] = [
    {
        id: 1,
        name: 'Angular',
        icon: faAngular,
        type: 'technical',
        description: 'skillType.technical.angular.description',
        level: 'Intermediate',
        experience: 2,
        subSkills: [
            'skillType.technical.angular.subSkills.1',
            'skillType.technical.angular.subSkills.2',
            'skillType.technical.angular.subSkills.3',
            'skillType.technical.angular.subSkills.4',
            'skillType.technical.angular.subSkills.5',
            'skillType.technical.angular.subSkills.6',
        ],
        libraries: [
            {
                url: 'https://rxjs.dev/',
                label: 'RxJS',
            },
            {
                url: 'https://ngrx.io/',
                label: 'NgRx',
            },
            {
                url: 'https://material.angular.io/',
                label: 'Angular Material',
            },
        ],
    },
    {
        id: 2,
        name: 'Javascript / Typescript',
        icon: faJsSquare,
        type: 'technical',
        level: 'Intermediate',
        experience: 0,
        subSkills: [
            'skillType.technical.js.subSkills.1',
            'skillType.technical.js.subSkills.2',
            'skillType.technical.js.subSkills.3',
            'skillType.technical.js.subSkills.4',
        ],
        libraries: [
            {
                url: 'https://lodash.com/',
                label: 'Lodash',
            },
            {
                url: 'https://github.com/typestack/class-transformer',
                label: 'class-transformer',
            },
        ],
    },
    {
        id: 3,
        name: 'HTML',
        icon: faHtml5,
        type: 'technical',
        level: 'Intermediate',
        experience: 0,
        subSkills: [
            'HTML Semantics',
            'Search Engine Optimization (SEO)',
            'Web Accessibility',
        ],
        libraries: [],
    },
    {
        id: 4,
        name: 'CSS',
        icon: faCss3Alt,
        type: 'technical',
        level: 'Advanced',
        experience: 0,
        subSkills: ['SCSS', 'CSS Methodologies: BEM', 'Responsive'],
        libraries: [
            {
                url: 'https://tailwindcss.com/',
                label: 'Tailwind',
            },
            {
                url: 'https://getbootstrap.com/',
                label: 'Bootstrap',
            },
            {
                url: 'https://material.angular.io/',
                label: 'Angular Material',
            },
        ],
    },
    {
        id: 11,
        name: 'NodeJS (ExpressJS, NestJS)',
        icon: faNodeJs,
        type: 'technical',
        level: 'Intermediate',
        experience: 0,
        subSkills: [],
        libraries: [],
        hideDetail: true,
    },
];

export const ToolSkills: Skill[] = [
    {
        id: 5,
        name: 'Git',
        icon: faGitAlt,
        type: 'tool',
        description:
            'I use git in most of my personal and corporate projects. With the company, I use git to manage source code, while with personal projects, I use git to manage source code, and deploy code to the host.',
        level: 'Not Rated',
        experience: 2.5,
        subSkills: [
            'Git Basic Command: Add, Commit, Push, Pull, Fetch, Merge, Rebase',
            'Git Branching and Merging Strategies',
            'Git Flow',
            'Git Hooks',
            'Deployment',
        ],
        libraries: [
            {
                url: 'https://github.com/',
                label: 'Github',
            },
            {
                url: 'https://about.gitlab.com/',
                label: 'Gitlab',
            },
            {
                url: 'https://bitbucket.org/',
                label: 'Bitbucket',
            },
        ],
        hideDetail: true,
    },
    {
        id: 6,
        name: 'Figma / Adobe XD',
        icon: null,
        type: 'tool',
        description:
            'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
        level: 'Not Rated',
        experience: 2.5,
        subSkills: [
            'UI Design',
            'Prototyping',
            'Collaboration',
            'Handoff',
            'Design System',
        ],
        libraries: [],
        hideDetail: true,
    },
    {
        id: 7,
        name: 'Postman',
        icon: null,
        type: 'tool',
        description:
            'Postman is a popular API client that makes it easy for developers to create, share, test and document APIs.',
        level: 'Not Rated',
        experience: 2.5,
        subSkills: [
            'API Testing',
            'API Documentation',
            'API Mocking',
            'API Monitoring',
        ],
        libraries: [],
        hideDetail: true,
    },
    {
        id: 8,
        name: 'Jira',
        icon: null,
        type: 'tool',
        description:
            'Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
        level: 'Not Rated',
        experience: 1,
        subSkills: [
            'Project Management',
            'Issue Tracking',
            'Bug Tracking',
            'Agile Development',
        ],
        libraries: [],
        hideDetail: true,
    },
    {
        id: 9,
        name: 'Notion',
        icon: null,
        type: 'tool',
        description:
            'Notion is an application that provides components such as notes, databases, kanban boards, wikis, calendars and reminders.',
        level: 'Not Rated',
        experience: 2.5,
        subSkills: [
            'Note Taking',
            'Project Management',
            'Knowledge Management',
            'Collaboration',
        ],
        libraries: [],
        hideDetail: true,
    },
];

export const SoftSkills: Skill[] = [
    {
        id: 10,
        name: 'English',
        icon: null,
        type: 'soft',
        shortDescription: 'skillType.soft.english.shortDescription',
        description: 'skillType.soft.english.description',
        level: 'Not Rated',
        experience: 0,
        subSkills: [],
        libraries: [],
        certificates: [
            {
                name: 'TOEIC 970 (2022)',
                url: 'assets/images/TOEIC-certificate.jpg',
            },
            // {
            //     name: 'English Communication for Work (2023)',
            //     url: 'assets/images/art.jpg',
            // },
        ],
    },
    {
        id: 11,
        name: 'Scrum - Agile',
        icon: null,
        type: 'soft',
        shortDescription: 'skillType.soft.agile.shortDescription',
        level: 'Not Rated',
        experience: 0,
        subSkills: [],
        libraries: [],
        hideDetail: true,
    },
    // {
    //     id: 12,
    //     name: 'Self Learning',
    //     icon: null,
    //     type: 'soft',
    //     description:
    //         'Self-learning is one of the most important skills that I have developed over the years. I am confident that I can learn any new technology or skill quickly.',
    //     level: 'Not Rated',
    //     experience: 0,
    //     subSkills: [],
    //     libraries: [],
    //     hideDetail: true,
    // },
    // {
    //     id: 13,
    //     name: 'Problem Solving',
    //     icon: null,
    //     type: 'soft',
    //     description:
    //         'Problem-solving is one of the most important skills that I have developed over the years. I am confident that I can solve any problem that arises in my work.',
    //     level: 'Not Rated',
    //     experience: 0,
    //     subSkills: [],
    //     libraries: [],
    //     hideDetail: true,
    // },
];

export const SkillTypes: SkillType[] = [
    {
        id: 'technical',
        name: 'skillType.technical.label',
        data: TechnicalSkills,
    },
    {
        id: 'tool',
        name: 'skillType.tool.label',
        data: ToolSkills,
    },
    {
        id: 'soft',
        name: 'skillType.soft.label',
        data: SoftSkills,
    },
];
