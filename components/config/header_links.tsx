type HeaderLinks = Array<{
    href: string,
    label: string
}>

type HeaderRemovePagesType = Array<string>

export const HEADER_LINKS: HeaderLinks = [
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
    { href: "/doc", label: "Documentation" },
]

export const HEADER_REMOVE_PAGES: HeaderRemovePagesType = [
    "/login"
]

export const HEADER_START_NOW = "/#pricing"