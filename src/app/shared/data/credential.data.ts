import { Information, StatsInformation } from '../interfaces/general-entity';

export const PersonalInformation: Information[] = [
    {
        label: 'credential.label.name',
        value: 'credential.value.name',
        templateRef: 'text',
    },
    {
        label: 'credential.label.age',
        value: 'credential.value.age',
        templateRef: 'text',
    },
    {
        label: 'credential.label.email',
        value: 'credential.value.email',
        templateRef: 'email',
    },
    {
        label: 'credential.label.location',
        value: 'credential.value.location',
        templateRef: 'text',
    },
    {
        label: 'credential.label.language',
        value: 'credential.value.language',
        templateRef: 'text',
    },
    {
        label: 'credential.label.education',
        value: 'credential.value.education',
        templateRef: 'text',
    },
];

export const StatsData: StatsInformation[] = [
    {
        label: 'statData.yoe',
        value: 2,
    },
    {
        label: 'statData.projects',
        value: 5,
    },
];
