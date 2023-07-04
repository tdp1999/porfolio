import {
    faSquareGithub,
    faLinkedin,
    faSquareTwitter,
    faSquareFacebook,
    faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from '../interfaces/general-entitly';

export const SocialLinkData: Link[] = [
    {
        id: 1,
        label: 'Github',
        icon: faSquareGithub,
        url: 'https://github.com/tdp1999',
    },
    {
        id: 2,
        label: 'Linkedin',
        icon: faLinkedin,
        url: 'https://www.linkedin.com/in/tdp1999/',
    },
    {
        id: 3,
        label: 'Twitter',
        icon: faSquareTwitter,
        url: 'https://twitter.com/PhuongThunder',
    },
    {
        id: 4,
        label: 'Facebook',
        icon: faSquareFacebook,
        url: 'https://www.facebook.com/TDucPhuong/',
    },
    {
        id: 5,
        label: 'Skype',
        icon: faSkype,
        url: 'https://join.skype.com/invite/wyk2Xwsf2IGx',
    },
];
