import { Experience } from '../interfaces/information.interface';

export const Experiences: Experience[] = [
    {
        company: 'Vitop Mekong',
        position: 'Frontend Developer (Intern & Part-time)',
        startDate: new Date(2021, 4, 1),
        endDate: new Date(2021, 11, 1),
        description:
            'Worked as a Frontend Developer for the project of a big insurance company, Vietnam branch. My team is responsible for developing and maintaining the web application using Angular',
        technologies: ['Angular', 'Bootstrap 4', 'TypeScript'],
        location: 'Can Tho, Vietnam',
        clientLocation: 'Vietnam',
        clientDomain: 'Insurance',
        // projectType: ['ERP'],
        project: [],
        responsibilities: [
            'Maintained and refactored the codebase',
            'Review the design and develop a new feature based on that design',
            'Participated in the weekly meeting with the account manager to discuss the issues and propose solutions',
        ],
        teamSize: 5,
        achievements: [
            'Successfully get acquainted with the job of a web developer.',
            "Successfully help the team to deliver 3 projects on time that meet the customer's requirements.",
            'Successfully accustomed to the Angular framework and some other web technologies such as Bootstrap 4, SwiperJS, etc.',
        ],
    },
    {
        company: 'App Core',
        position: 'Software Engineer',
        startDate: new Date(2022, 0, 1),
        endDate: new Date(2022, 4, 1),
        description:
            'Worked as a main Frontend Developer for multiple projects of several client located in Australia. My team is responsible for developing and maintaining the web application using Angular in the frontend and Python in the backend',
        technologies: ['Angular', 'Bootstrap 4', 'TypeScript', 'Incognito AWS'],
        location: 'Can Tho, Vietnam',
        clientLocation: 'Australia',
        clientDomain: 'Miscellaneous',
        project: [],
        responsibilities: [
            'Get design mockups, review them, and give feedback to the designer.',
            'From design, build SPA websites with reusable pages and components.',
            'Handle user interactions and integrate APIs from the Backend.',
            'Participated in the daily meeting with the team and PM to discuss the issues and propose solutions.',
        ],
        teamSize: 7,
        achievements: [
            'Get acquainted with the knowledge of Scrum - Kanban strategies, and the process of developing a web application.',
            'Significantly improve my communication skills, self-learning skills, and the ability to work under pressure.',
        ],
    },
    {
        company: 'Real Estate Doc (Redoc)',
        position: 'Frontend Developer',
        startDate: new Date(2023, 7, 22),
        endDate: null,
        description:
            'Worked as a Frontend Developer for multiple projects of several big real estate companies in Singapore. My team is responsible for developing and maintaining the ERP system for clients company using Angular in the frontend and NestJS in the backend.',
        technologies: ['Angular', 'Bootstrap 4', 'TypeScript', 'NodeJS'],
        location: 'Can Tho, Vietnam',
        clientLocation: 'United States',
        clientDomain: 'Real Estate',
        project: [],
        responsibilities: [
            'Get design mockups, review them, and give feedback to the designer.',
            'From design, build SPA websites with reusable pages and components.',
            'Handle user interactions and integrate APIs from the Backend.',
            'Participated in the daily meeting with the team and PM to discuss the issues and propose solutions.',
        ],
        teamSize: 3,
        achievements: [
            'Get acquainted with the knowledge of Scrum - Kanban strategies, and the process of developing a web application.',
            'Significantly improve my communication skills, self-learning skills, and the ability to work under pressure.',
        ],
    },
];
