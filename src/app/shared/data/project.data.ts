import { ETag } from '../enums/tag.enum';
import { Project, ProjectTagDescription } from '../interfaces/project.interface';

export const ProjectTags: Record<ETag, ProjectTagDescription> = {
    [ETag.allTag]: {
        id: ETag.allTag,
        label: 'allTag',
        description: 'All projects',
    },
    [ETag.personal]: {
        id: ETag.personal,
        label: 'projectTag.personal.label',
        description: 'projectTag.personal.description',
        class: 'text-theme-primary border-theme-primary',
    },
    [ETag.professional]: {
        id: ETag.professional,
        label: 'projectTag.professional.label',
        description: 'projectTag.professional.description',
        class: 'text-theme-accent border-theme-accent',
    },
    [ETag.demoAvailable]: {
        id: ETag.demoAvailable,
        label: 'projectTag.demoAvailable.label',
        description: 'projectTag.demoAvailable.description',
        class: 'text-theme-black-80 border-theme-black-80 dark:text-theme-white-80 dark:border-theme-white-80',
    },
};

export const Projects: Project[] = [
    {
        id: 1,
        name: 'projectData.1.name',
        description: 'projectData.1.description',
        technologies: ['Angular', 'TailwindCSS'],
        startDate: {
            value: new Date(2023, 5, 9),
            semanticValue: '2023-06-09',
        },
        endDate: null,
        projectCategory: 'Landing',
        projectType: 'Personal',
        projectSize: 'Small',
        mainFunctionality: [
            'projectData.1.mainFunctionality.1',
            'projectData.1.mainFunctionality.2',
            'projectData.1.mainFunctionality.3',
            'projectData.1.mainFunctionality.4',
        ],
        thumbnail: {
            url: 'assets/images/projects/project-porfolio-250.webp',
            srcset: 'assets/images/projects/project-porfolio-250.webp 250w, assets/images/projects/project-porfolio-315.webp 315w, assets/images/projects/project-porfolio-440.webp 440w, assets/images/projects/project-porfolio-575.webp 575w',
            description: 'Portfolio',
        },
        demoLink: {
            id: 1,
            url: 'https://thunderphong.com',
            label: 'thunderphong.com',
        },
        sourceCodeLink: {
            id: 1,
            url: 'https://github.com/tdp1999/porfolio',
            label: 'Github',
            hide: true,
        },
        tags: [
            {
                id: ETag.personal,
                label: 'projectTag.personal.label',
                description: 'projectTag.personal.description',
                class: 'text-theme-primary border-theme-primary',
            },
            {
                id: ETag.demoAvailable,
                label: 'projectTag.demoAvailable.label',
                description: 'projectTag.demoAvailable.description',
                class: 'text-theme-black-80 border-theme-black-80 dark:text-theme-white-80 dark:border-theme-white-80',
            },
        ],
    },
    {
        id: 2,
        name: 'projectData.2.name',
        description: 'projectData.2.description',
        technologies: ['Angular', 'TailwindCSS', 'NestJS'],
        startDate: {
            value: new Date(2022, 7, 22),
            semanticValue: '2022-08-22',
        },
        endDate: null,
        projectCategory: 'ERP',
        projectType: 'Team',
        projectSize: 'Large',
        mainFunctionality: [
            'projectData.2.mainFunctionality.1',
            'projectData.2.mainFunctionality.2',
            'projectData.2.mainFunctionality.3',
            'projectData.2.mainFunctionality.4',
            'projectData.2.mainFunctionality.5',
            'projectData.2.mainFunctionality.6',
        ],
        clientDomain: 'Real Estate',
        clientLocation: 'Singapore',
        thumbnail: {
            url: 'assets/images/projects/erp-250.webp',
            srcset: 'assets/images/projects/erp-250.webp 250w, assets/images/projects/erp-315.webp 315w, assets/images/projects/erp-440.webp 440w, assets/images/projects/erp-575.webp 575w',
            description: 'ERP System Websites',
        },
        tags: [
            {
                id: ETag.professional,
                label: 'projectTag.professional.label',
                description: 'projectTag.professional.description',
                class: 'text-theme-accent border-theme-accent',
            },
        ],
    },
    {
        id: 3,
        name: 'projectData.3.name',
        description: 'projectData.3.description',
        technologies: ['Angular', 'Bootstrap 5'],
        startDate: {
            value: new Date(2021, 0, 1),
            semanticValue: '2021-01-01',
        },
        endDate: {
            value: new Date(2021, 4, 5),
            semanticValue: '2021-05-05',
        },
        projectCategory: 'Miscellaneous',
        projectType: 'Team',
        projectSize: 'Small',
        clientDomain: 'Automobile',
        clientLocation: 'Australia',
        mainFunctionality: ['projectData.3.mainFunctionality.1', 'projectData.3.mainFunctionality.2', 'projectData.3.mainFunctionality.3'],
        thumbnail: {
            url: 'assets/images/projects/listing-250.webp',
            srcset: 'assets/images/projects/listing-250.webp 250w, assets/images/projects/listing-315.webp 315w, assets/images/projects/listing-440.webp 440w, assets/images/projects/listing-575.webp 575w',
            description: 'ERP System Websites',
        },
        tags: [
            {
                id: ETag.professional,
                label: 'projectTag.professional.label',
                description: 'projectTag.professional.description',
                class: 'text-theme-accent border-theme-accent',
            },
        ],
    },
    {
        id: 4,
        name: 'projectData.4.name',
        description: 'projectData.4.description',
        technologies: ['Angular', 'Bootstrap 5'],
        startDate: {
            value: new Date(2021, 0, 1),
            semanticValue: '2021-01-01',
        },
        endDate: {
            value: new Date(2021, 4, 5),
            semanticValue: '2021-05-05',
        },
        projectCategory: 'Miscellaneous',
        projectType: 'Team',
        projectSize: 'Small',
        clientDomain: 'Solar Pool Heating',
        clientLocation: 'Australia',
        mainFunctionality: ['projectData.4.mainFunctionality.1', 'projectData.4.mainFunctionality.2', 'projectData.4.mainFunctionality.3'],
        thumbnail: {
            url: 'assets/images/projects/website-250.webp',
            srcset: 'assets/images/projects/website-250.webp 250w, assets/images/projects/website-315.webp 315w, assets/images/projects/website-440.webp 440w, assets/images/projects/website-575.webp 575w',
            description: 'ERP System Websites',
        },
        tags: [
            {
                id: ETag.professional,
                label: 'projectTag.professional.label',
                description: 'projectTag.professional.description',
                class: 'text-theme-accent border-theme-accent',
            },
        ],
    },
    {
        id: 5,
        name: 'projectData.5.name',
        description: 'projectData.5.description',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        startDate: {
            value: new Date(2021, 7, 12),
            semanticValue: '2021-08-12',
        },
        endDate: {
            value: new Date(2021, 7, 15),
            semanticValue: '2021-08-15',
        },
        projectCategory: 'Landing',
        projectType: 'Personal',
        projectSize: 'Not Rated',
        mainFunctionality: ['projectData.5.mainFunctionality.1'],
        demoLink: {
            id: 1,
            url: 'https://pp-food.netlify.app/',
            label: 'Demo',
        },
        sourceCodeLink: {
            id: 1,
            url: 'https://github.com/tdp1999/PP-Food',
            label: 'Github',
        },
        thumbnail: {
            url: 'assets/images/projects/website-250.webp',
            srcset: 'assets/images/projects/website-250.webp 250w, assets/images/projects/website-315.webp 315w, assets/images/projects/website-440.webp 440w, assets/images/projects/website-575.webp 575w',
            description: 'ERP System Websites',
        },
        tags: [
            {
                id: ETag.personal,
                label: 'projectTag.personal.label',
                description: 'projectTag.personal.description',
                class: 'text-theme-primary border-theme-primary',
            },
            {
                id: ETag.demoAvailable,
                label: 'projectTag.demoAvailable.label',
                description: 'projectTag.demoAvailable.description',
                class: 'text-theme-black-80 border-theme-black-80 dark:text-theme-white-80 dark:border-theme-white-80',
            },
        ],
    },
];
