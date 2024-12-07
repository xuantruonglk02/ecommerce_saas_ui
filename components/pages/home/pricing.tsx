import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Pricing() {
    return (
        <>
            <section className="bg-gray-100 overflow-hidden" id="pricing">
                <div className="py-24 px-8 max-w-5xl mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="font-medium text-primary mb-8">Pricing
                        </p>
                        <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">Easy Setup, Better Results
                        </h2>
                    </div>
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-bold mb-4">Limited Time Offer!
                        </h3>
                        <p className="text-lg mb-4">Pay once, use forever for the first 100 customers
                        </p>
                        <div className="flex justify-center">
                            <div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                                <div className="bg-indigo-700 h-2.5 rounded-full w-7/12">
                                </div>
                            </div>
                        </div>
                        <p className="text-sm">73 spots remaining
                        </p>
                    </div>
                    <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                        <div className="relative w-full max-w-lg">
                            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-white p-8 rounded-lg">
                                <div className="flex justify-between items-center gap-4">
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold">Basic Plan
                                        </h3>
                                        <p className="text-base-content/80 mt-2">Perfect for small websites
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col justify-end mb-[4px] text-lg">
                                        <p className="relative">
                                            <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]">
                                            </span>
                                            <span className="text-base-content/80 line-through">$19
                                            </span>
                                        </p>
                                    </div>
                                    <h2 className="text-5xl tracking-tight font-extrabold">$5
                                    </h2>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-xs text-base-content/60 uppercase font-semibold">One-time
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Create and customize up to 5 popups
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Standard customer support
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>One Website
                                        </span>
                                    </li>
                                </ul>
                                <div className="space-y-2">
                                    <Link href="/checkout?plan=basic">
                                        <Button className="btn btn-primary btn-block group w-full h-12">
                                            <svg className="w-5 h-5 fill-white group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
                                                </path>
                                            </svg>Pay once use forever
                                        </Button>
                                    </Link>
                                    <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">Limited time offer!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full max-w-lg">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <span className="badge text-xs text-white py-1 px-3 rounded-full font-semibold border-0 bg-indigo-700">POPULAR
                                </span>
                            </div>
                            <div className="absolute -inset-[1px] rounded-[9px] bg-indigo-700 z-10">
                            </div>
                            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-white p-8 rounded-lg">
                                <div className="flex justify-between items-center gap-4">
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold">Pro Plan
                                        </h3>
                                        <p className="text-base-content/80 mt-2">Ideal for growing websites
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col justify-end mb-[4px] text-lg">
                                        <p className="relative">
                                            <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]">
                                            </span>
                                            <span className="text-base-content/80 line-through">$49
                                            </span>
                                        </p>
                                    </div>
                                    <h2 className="text-5xl tracking-tight font-extrabold">$8
                                    </h2>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-xs text-base-content/60 uppercase font-semibold">One-time
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Create and customize 10 popups
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Advanced analytics and reporting
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>A/B testing capabilities
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Priority customer support
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Up to 5 websites
                                        </span>
                                    </li>
                                </ul>
                                <div className="space-y-2">
                                    <Link href="/checkout?plan=pro">
                                        <Button className="btn btn-primary btn-block group w-full h-12">
                                            <svg className="w-5 h-5 fill-white group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
                                                </path>
                                            </svg>Pay once use forever
                                        </Button>
                                    </Link>
                                    <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">Limited time offer!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full max-w-lg">
                            <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-white p-8 rounded-lg">
                                <div className="flex justify-between items-center gap-4">
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold">Enterprise Plan
                                        </h3>
                                        <p className="text-base-content/80 mt-2">Best for high-traffic websites
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-5xl tracking-tight font-extrabold">
                                    </h2>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-xs text-base-content/60 uppercase font-semibold">One-time
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>All features from Pro Plan
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                        <span>Dedicated account manager
                                        </span>
                                    </li>
                                </ul>
                                <div className="space-y-2">
                                    <Button className="btn btn-primary btn-block group w-full h-12">Contact Us
                                    </Button>
                                    <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">Limited time offer!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}