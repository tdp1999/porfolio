import { Experience } from '../interfaces/experience.interface';

export const Experiences: Experience[] = [
    {
        id: 1,
        company: 'Vitop Mekong',
        position: 'Frontend Developer (Intern & Part-time)',
        startDate: {
            value: new Date(2021, 4, 1),
            semanticValue: '2021-05-01',
        },
        endDate: {
            value: new Date(2021, 11, 1),
            semanticValue: '2021-12-01',
        },
        description: 'experienceData.1.description',
        technologies: ['Angular', 'Bootstrap 4', 'TypeScript'],
        location: 'experienceData.1.location',
        clientLocation: 'experienceData.1.clientLocation',
        clientDomain: 'experienceData.1.clientDomain',
        project: [],
        responsibilities: [
            'experienceData.1.responsibilities.1',
            'experienceData.1.responsibilities.2',
            'experienceData.1.responsibilities.3',
        ],
        teamSize: 5,
        achievements: [
            'experienceData.1.achievements.1',
            'experienceData.1.achievements.2',
            'experienceData.1.achievements.3',
        ],
        image: {
            url: 'assets/images/carousel/carousel-1.jpg',
            description: 'Art',
            tags: ['art', 'painting', 'drawing'],
            alt: 'Art',
        },
    },
    {
        id: 2,
        company: 'AppCore',
        position: 'Junior Software Engineer',
        startDate: {
            value: new Date(2022, 0, 1),
            semanticValue: '2022-01-01',
        },
        endDate: {
            value: new Date(2022, 4, 1),
            semanticValue: '2022-05-01',
        },
        description: 'experienceData.2.description',
        technologies: ['Angular', 'Bootstrap 4', 'TypeScript', 'Incognito AWS'],
        location: 'experienceData.2.location',
        clientLocation: 'experienceData.2.clientLocation',
        clientDomain: 'experienceData.2.clientDomain',
        project: [],
        responsibilities: [
            'experienceData.2.responsibilities.1',
            'experienceData.2.responsibilities.2',
            'experienceData.2.responsibilities.3',
            'experienceData.2.responsibilities.4',
            'experienceData.2.responsibilities.5',
        ],
        teamSize: 7,
        achievements: [
            'experienceData.2.achievements.1',
            'experienceData.2.achievements.2',
        ],
        image: {
            url: 'assets/images/carousel/carousel-1.jpg',
            description: 'Art',
            tags: ['art', 'painting', 'drawing'],
            alt: 'Art',
        },
    },
    {
        id: 3,
        company: 'Real Estate Doc (Redoc)',
        position: 'Frontend Developer',
        startDate: {
            value: new Date(2023, 7, 22),
            semanticValue: '2023-08-22',
        },
        endDate: null,
        description: 'experienceData.3.description',
        technologies: ['Angular', 'Typescript', 'NgRx', 'Nx'],
        location: 'experienceData.3.location',
        clientLocation: 'experienceData.3.clientLocation',
        clientDomain: 'experienceData.3.clientDomain',
        project: [],
        responsibilities: [
            'experienceData.3.responsibilities.1',
            'experienceData.3.responsibilities.2',
            'experienceData.3.responsibilities.3',
            'experienceData.3.responsibilities.4',
            'experienceData.3.responsibilities.5',
            'experienceData.3.responsibilities.6',
        ],
        teamSize: [10, 15],
        achievements: [
            'experienceData.3.achievements.1',
            'experienceData.3.achievements.2',
            'experienceData.3.achievements.3',
        ],
        image: {
            url: 'assets/images/carousel/carousel-1.jpg',
            description: 'Art',
            tags: ['art', 'painting', 'drawing'],
            alt: 'Art',
        },
    },
];
