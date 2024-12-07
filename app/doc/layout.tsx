"use client"
import { Search, BookOpen } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { usePathname } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const sideBarDocs = [
    {
        part: "Website Builders",
        page: [
            {
                title: 'Framer',
                href: '/doc/Framer'
            },
            {
                title: 'Wix',
                href: '/doc/Wix'
            },
            {
                title: 'Squarespace',
                href: '/doc/Squarespace'
            },
            {
                title: 'Weebly',
                href: '/doc/Weebly'
            },
            {
                title: 'Webflow',
                href: '/doc/Webflow'
            },
            {
                title: 'Duda',
                href: '/doc/Duda'
            }
        ]
    },
    {
        part: "E-Commerce Platforms",
        page: [
            {
                title: 'Shopify',
                href: '/doc/Shopify'
            },
            {
                title: 'BigCommerce',
                href: '/doc/BigCommerce'
            },
            {
                title: 'Magento',
                href: '/doc/Magento'
            },
        ]
    }
]

export default function DocsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const path = usePathname()

    return (<>
        <div className="min-h-screen flex w-full">
            <aside className="w-80 border-r bg-muted/10 p-6 hidden md:block">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        className="pl-9"
                        placeholder="Search platforms..."
                        type="search"
                    />
                </div>

                <nav className="mt-8 space-y-8">
                    {sideBarDocs.map((e, index) => <div key={index}>
                        <h2 className="mb-4 text-lg font-semibold">Website Builders</h2>
                        {e.page.map((pages, index) => (
                            <div className={`space-y-3 p-2 rounded-lg ${path == pages.href ? "bg-gradient-to-r from-[#0077ff] to-[#00e7df]" : ""}`} key={index}>
                                <a
                                    href={pages.href}
                                    className={`flex items-center gap-2 text-muted-foreground ${path == pages.href ? "text-white" : "hover:text-foreground "}`}
                                >
                                    <BookOpen className="h-4 w-4" />
                                    <span>{pages?.title}</span>
                                </a>
                            </div>
                        ))}
                    </div>)}
                </nav>
            </aside>
            <div className='w-full'>
                <div className='p-6 md:hidden'>
                    <Select>
                        <SelectTrigger className="w-full bg-white shadow-lg h-12 text-base">
                            <SelectValue placeholder="Select your platform"/>
                        </SelectTrigger>
                        <SelectContent>
                            {sideBarDocs.map((e, index) => {
                                return (<SelectGroup key={index}>
                                    <SelectLabel>{e.part}</SelectLabel>
                                    {e.page.map((pages, index) => (
                                        <SelectItem key={index} value={pages.href}>
                                            {pages?.title}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>)
                            })}
                        </SelectContent>
                    </Select>
                </div>

                {children}
            </div>
        </div>
    </>)
}