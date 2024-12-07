type FooterLinks = Array<{
    id: number,
    label: string,
    links: Array<{
        href: string
        text: string
    }>
}>

export const FOOTER_LINKS: FooterLinks = [
    {
        id: 1,
        label: 'LINKS',
        links: [
            {
                href: '/',
                text: 'Home'
            },
            {
                href: 'mailto:harrymadison297@gmail.com',
                text: 'Support'
            },
            {
                href: '/#pricing',
                text: 'Pricing'
            },
            {
                href: '/dashboard',
                text: 'Dashboard'
            }
        ]
    },
    {
        id: 2,
        label: 'LEGAL',
        links: [
            {
                href: '/tos',
                text: 'Terms of Service'
            },
            {
                href: '/privacy-policy',
                text: 'Privacy policy'
            }
        ]
    },
    {
        id: 3,
        label: 'BY THE MAKER',
        links: [
            {
                href: "/",
                text: 'SaaS'
            },
        ]
    }
]

export const FOOTER_REMOVE_PAGES: Array<string> = [
    "/login"
]
