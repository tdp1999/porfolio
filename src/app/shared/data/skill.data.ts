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
        // 'Angular là framework frontend chính mà mình sử dụng, cả trong project của công ty và những project cá nhân. Có thể nói, trong 1.5 năm trở lại đây, hầu như tuần nào mình cũng code Angular, hoặc học về Angular.',
        description:
            "I have been primarily using Angular as the main frontend framework for both corporate and personal projects. Over the past 1.5 years, it's safe to say that almost every week I have either been coding with Angular or deepening my understanding of it.",
        level: 'Intermediate',
        experience: 2,
        subSkills: [
            'Implementing Basic & Reusable Building Block: Components, Directives, Pipes, etc ',
            'Form Manipulation: Reactive Forms, Template Driven Forms',
            'Dependency Injection Apply in Practice',
            'Routing & Navigation',
            'Handle HTTP Request (RESTful API) with HttpClient',
            'Understanding Data Sharing Between Components Using Binding, Service, DI and Store (NgRx)',
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
        // Angular được xây dựng toàn bộ dựa typescript, do vậy việc sử dụng typescript với mình là điều bắt buộc.
        level: 'Intermediate',
        experience: 0,
        subSkills: [
            'DOM Manipulation',
            'Interface, Type Alias and Enum',
            'Using Generics',
            'Creating and Using Custom Decorators',
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
            'Git Basic Command: Add, Commit, Push, Pull, Fetch, Merge, Rebase, etc',
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
        shortDescription: '(TOEIC 970, Good Conversational English)',
        description:
            'For over two years, I have been utilizing English as my primary working language. I am comfortable communicating in English, both in written and spoken form, and I have a good grasp of reading and understanding English documents.',
        level: 'Not Rated',
        experience: 0,
        subSkills: [],
        libraries: [],
        certificates: [
            {
                name: 'TOEIC 970 (2022)',
                url: 'assets/images/TOEIC-certificate.jpg',
            },
            {
                name: 'English Communication for Work (2023)',
                url: 'assets/images/art.jpg',
            },
        ],
    },
    {
        id: 11,
        name: 'Scrum/Kanban - Agile',
        icon: null,
        type: 'soft',
        shortDescription: '(As a Member)',
        description:
            'I have been working in an Agile environment for over 1.5 years. I have a good understanding of the Agile process and have applied it in my work.',
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
        name: 'Technicals',
        data: TechnicalSkills,
    },
    {
        id: 'tool',
        name: 'Tool & Technologies',
        data: ToolSkills,
    },
    {
        id: 'soft',
        name: 'Additional Skills',
        data: SoftSkills,
    },
];
