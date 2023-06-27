import bulsoft from '@/public/logo/bulsoft.svg';



// import { BiLogoLinkedin,BiLogoMessenger, BiLogoTwitter} from 'react-icons/bi';
 export const footerLinks = {
    footerLogo: {
        logo: bulsoft,
     socialLink: [
        {
            title: 'linkedin',
            icon: 'BsLinkedin',
            route: '/linkedin'
        },
        {
            title: 'messanger',
            icon: 'BsMessenger',
            route: '/messanger'
        },
        {
            title: 'twitter',
            icon: 'BsTwitter',
            route: '/twitter'
        },
        {
            title: 'linkedin',
            icon: 'BsLinkedin',
            route: '/linkedin'
        },
     ]
    },
    company: [
        {
            title: 'About Us',
            route: '/about'
        },
        {
            title: 'Careers',
            route: '/careers'
        },
        {
            title: 'Blog',
            route: '/blog'
        },
        {
            title: 'Pricing',
            route: '/pricing'
        }
    ],

    resources : [
        {
            title: 'Templates',
            route: '/templates'
        },
        {
            title: 'Tutorials',
            route: '/tutorials'
        },
        {
            title: 'Free Resources',
            route: '/resources'
        },
        {
            title: 'Careers',
            route: '/careers'
        },
        {
            title: 'Contact Us',
            route: '/contact-us'
        }
    ]
}