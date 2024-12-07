import Image from "next/image";

export default function HowItWorks() {
    return (
        <>
            <section className="relative bg-gradient-to-b from-base-100 to-base-200 overflow-hidden" id="how-it-works">
                <div className="absolute inset-0 bg-grid-slate-900/[0.03] bg-[size:20px_20px] md:bg-[size:40px_40px] -z-0">
                </div>
                <div className="absolute inset-0 flex items-center justify-center -z-0">
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-2xl">
                    </div>
                </div>
                <div className="relative py-12 sm:py-16 md:py-24 px-4 max-w-7xl mx-auto z-10">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                            <h2 id="howitworks-section" className="text-sm md:text-base font-semibold text-primary">How It Works
                            </h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">Transform Visitors into Customers
                            <span className="text-primary">in 2 Steps
                            </span>
                        </h3>
                        <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto px-4">No more complex setups - Get started in minutes and see results.
                        </p>
                    </div>
                    <div className="space-y-16 md:space-y-32">
                        <div className="flex flex-col gap-8 md:gap-16 lg:flex-row items-center">
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-4">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-5 h-5 sm:w-6 sm:h-6 text-primary">
                                            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor">
                                            </circle>
                                            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor">
                                            </circle>
                                            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor">
                                            </circle>
                                            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor">
                                            </circle>
                                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold">1. Design Your Perfect Popup
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-base-content/70 leading-relaxed">Create eye-catching popups that convert without annoying your visitors. Our intelligent timing ensures they appear at just the right moment.
                                </p>
                                <div className="grid grid-cols-3 gap-2 md:gap-4">
                                    <div className="bg-base-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl">⚡
                                            </span>
                                            <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">3-Min Setup
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-base-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl">🎨
                                            </span>
                                            <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">No Coding
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-base-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl">✨
                                            </span>
                                            <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">Templates
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
                                <div className="relative w-full max-w-[500px] aspect-video bg-base-100 rounded-2xl shadow-xl p-4 md:p-8 hover:shadow-2xl transition-all duration-300">
                                    <div className="relative w-full h-full">
                                        <Image alt="1. Design Your Perfect Popup" loading="lazy" width="600" height="400" decoding="async" className="object-contain w-full h-full rounded-xl" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" src="https://appbars.co/_next/image?url=%2Fpopup3.png&amp;w=3840&amp;q=75" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 md:gap-16 lg:flex-row-reverse items-center">
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-4">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-5 h-5 sm:w-6 sm:h-6 text-primary">
                                            <polyline points="16 18 22 12 16 6">
                                            </polyline>
                                            <polyline points="8 6 2 12 8 18">
                                            </polyline>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold">2. One-Click Installation
                                    </h3>
                                </div>
                                <p className="text-base md:text-lg text-base-content/70 leading-relaxed">Add your popups to any website with a single line of code. No technical expertise required - if you can copy and paste, you&apos;re good to go.
                                </p>
                                <div className="grid grid-cols-3 gap-2 md:gap-4">
                                    <div className="bg-base-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl">📝
                                            </span>
                                            <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">Single Line
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-base-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl">🌐
                                            </span>
                                            <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">Universal
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-base-100/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg md:text-xl">🚀
                                            </span>
                                            <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">Zero Impact
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
                                <div className="relative mx-auto transform hover:scale-105 transition-transform duration-300">
                                    <div className="relative w-[280px] h-[560px] md:w-[300px] md:h-[600px]">
                                        <div className="absolute top-[3%] left-[4%] right-[4%] bottom-[3%] overflow-hidden rounded-[45px] z-10">
                                            <div className="relative w-full h-full">
                                                <Image alt="2. One-Click Installation" loading="lazy" width="300" height="600" decoding="async" className="object-cover w-full h-full" sizes="(max-width: 768px) 280px, 300px" src="https://appbars.co/_next/image?url=%2Fphonescc8.png&amp;w=3840&amp;q=75" />
                                            </div>
                                        </div>
                                        <Image alt="Device frame" fetchPriority="high" width="300" height="600" decoding="async" className="object-contain absolute inset-0 z-20 drop-shadow-2xl" sizes="(max-width: 768px) 280px, 300px" src="https://appbars.co/_next/image?url=%2Fiphone-frame.png&amp;w=3840&amp;q=75" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 md:mt-24 text-center px-4">
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 bg-base-100/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-5 h-5 text-primary flex-shrink-0">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                        </path>
                                    </svg>
                                    <p className="text-sm font-medium text-left">30-Day Money-Back Guarantee
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 bg-base-100/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 text-primary flex-shrink-0">
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                        </path>
                                    </svg>
                                    <p className="text-sm font-medium text-left">Instant Setup
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="inline-block" href="/#pricing">
                            <button className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-primary-focus hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2">
                                <span className="inline-flex items-center text-white">Start Converting More Visitors Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M5 12h14">
                                        </path>
                                        <path d="m12 5 7 7-7 7">
                                        </path>
                                    </svg>
                                </span>
                                <div className="absolute -inset-0.5 -z-10 bg-gradient-to-r from-primary to-primary-focus opacity-0 blur transition duration-300 group-hover:opacity-30">
                                </div>
                            </button>
                        </a>
                        <div className="mt-6 space-y-2">
                            <p className="text-sm md:text-base font-semibold text-base-content/80">Special Launch Offer: Lock in Lifetime Access Today!
                            </p>
                            <p className="text-xs md:text-sm text-base-content/60">Start converting more visitors with zero risk
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>)
}