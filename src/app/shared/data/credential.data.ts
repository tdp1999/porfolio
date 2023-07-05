import { Information, StatsInformation } from '../interfaces/general-entitly';

export const PersonalInformation: Information[] = [
    {
        label: 'Name',
        value: 'Tran Duc Phuong',
        templateRef: 'text',
    },
    {
        label: 'Age',
        value: '24',
        templateRef: 'text',
    },
    {
        label: 'Email',
        value: 'tdp99.business@gmail.com',
        templateRef: 'email',
    },
    {
        label: 'Locations',
        value: 'Can Tho, HCM City (VN)',
        templateRef: 'text',
    },
    {
        label: 'Languages',
        value: 'Vietnamese, English',
        templateRef: 'text',
    },
    {
        label: 'Education',
        value: 'Bachelor of Engineer (Valedictorian) - Can Tho University',
        templateRef: 'text',
    },
];

export const StatsData: StatsInformation[] = [
    {
        label: 'Years of Experience',
        value: 2,
    },
    {
        label: 'Projects Completed',
        value: 5,
    },
];
