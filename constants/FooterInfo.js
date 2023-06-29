import bulsoft from '@/public/logo/bulsoft.svg';



// import { BiLogoLinkedin,BiLogoMessenger, BiLogoTwitter} from 'react-icons/bi';
 export const footerLinks = {
    footerLogo: {
        logo: bulsoft,
     socialLink: [
        {
            title: 'linkedin',
            icon: 'BsLinkedin',
            route: '/'
        },
        {
            title: 'messanger',
            icon: 'BsMessenger',
            route: '/'
        },
        {
            title: 'twitter',
            icon: 'BsTwitter',
            route: '/'
        },
        {
            title: 'linkedin',
            icon: 'BsLinkedin',
            route: '/'
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
            route: '/'
        },
        {
            title: 'Blogs',
            route: '/blogs'
        },
        {
            title: 'Pricing',
            route: '/'
        }
    ],

    resources : [
        {
            title: 'Templates',
            route: '/'
        },
        {
            title: 'Tutorials',
            route: '/'
        },
        {
            title: 'Free Resources',
            route: '/'
        }
    ]
}