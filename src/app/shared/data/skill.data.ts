import {
    faAngular,
    faCss3,
    faCss3Alt,
    faHtml5,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { Skill } from '../interfaces/skill.interface';

export const Skills: Skill[] = [
    {
        id: 1,
        name: 'Angular',
        icon: faAngular,
        description:
            'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
        level: 'Intermediate',
        experience: 2,
        subSkills: [
            'Implementing Basic & Reusable Building Block: Components, Directives, Services, etc ',
            'Form Manipulation: Reactive Forms, Template Driven Forms',
            'Dependency Injection Apply in Practice',
            'Routing & Navigation',
            'Understanding Data Sharing Between Components Using Binding, Service, DI and Store (NgRx)',
        ],
        libraries: ['RxJS', 'NgRx', 'Angular Material'],
    },
    {
        id: 2,
        name: 'Javascript / Typescript',
        icon: faJsSquare,
        description:
            'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
        level: 'Intermediate',
        experience: 2,
        subSkills: [
            'Using TypeScript Basic Types',
            'Interface and Type Alias',
            'Using Generics',
            'Using Utility Types',
            'Creating and Using Custom Decorators',
        ],
        libraries: ['Lodash', 'class-transformer'],
    },
    {
        id: 3,
        name: 'HTML',
        icon: faHtml5,
        description:
            'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
        level: 'Intermediate',
        experience: 2.5,
        subSkills: [
            'Angular 2+',
            'Angular Universal',
            'Angular Material',
            'Angular Flex Layout',
        ],
        libraries: [
            'RxJS',
            'NgRx',
            'Angular Fire',
            'Angular Material',
            'Angular Flex Layout',
        ],
    },
    {
        id: 4,
        name: 'CSS',
        icon: faCss3Alt,
        description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
        level: 'Advanced',
        experience: 2.5,
        subSkills: [
            'Angular 2+',
            'Angular Universal',
            'Angular Material',
            'Angular Flex Layout',
        ],
        libraries: [
            'RxJS',
            'NgRx',
            'Angular Fire',
            'Angular Material',
            'Angular Flex Layout',
        ],
    },
];
