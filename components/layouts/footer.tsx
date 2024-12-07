'use client'

import Link from "next/link"
import { FOOTER_LINKS, FOOTER_REMOVE_PAGES } from "../config/footer_links"
import { Separator } from "@radix-ui/react-separator"
import Image from "next/image"
import gradientBottom from '@/assets/images/gradient-background-bottom.png'
import { usePathname } from "next/navigation"

function removeHeader(path: string, rm_path: Array<string>): boolean{
    for (let index = 0; index < rm_path.length; index++) {
        const element = rm_path[index];
        if (path.includes(element)){
            return true;
        }
    }
    return false;
}

export default function Footer() {
    const pathname = usePathname()
    const isHidden = removeHeader(pathname, FOOTER_REMOVE_PAGES)
    return (<>
        <div className={`bg-background/30 relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px] ${isHidden ? "hidden": ""}`}>
            <hr />
            <Separator className="my-4" />
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-4'>
                <div className="mb-10 flex flex-col md:items-start gap-4 pr-4">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                    <div>&copy; {new Date().getFullYear()} Harry</div>

                </div>
                {FOOTER_LINKS.map((list, index) => (
                    <div key={index} className='mb-10 flex flex-col md:items-end gap-4 pr-4'>
                        <h3 className='text-base font-medium font-[family-name:var(--font-geist-sans)]'>{list.label}</h3>
                        {list.links.map((link, index) => {
                            const { href, text } = link
                            return (<div key={index}>
                                <Link key={index} href={href} className="text-gray-600 font-[family-name:var(--font-geist-sans)]">
                                    {text}
                                </Link>
                            </div>)
                        })}
                    </div>
                ))}
            </div>
            <Image
                width={1512}
                height={447}
                className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
                src={gradientBottom}
                alt=''
                role='presentation'
                priority
            />
        </div>
    </>)
}