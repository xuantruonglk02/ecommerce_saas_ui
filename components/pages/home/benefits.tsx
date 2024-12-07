export default function Benefits() {
    return (<>
        <section className="bg-gray-100 overflow-hidden" id="benefits">
            <div className="py-24 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="font-medium text-primary mb-8">Benefits
                    </p>
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">Transform Your Conversion Strategy
                    </h2>
                    <p className="mt-6 text-lg text-base-content/80 max-w-2xl mx-auto">Stop losing potential customers. Our smart popups capture leads at the perfect moment, without disrupting the user experience.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="relative bg-base-100 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-primary">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Instant Conversion Boost
                        </h3>
                        <p className="text-base-content/80">Increase conversions by 5-10% with perfectly-timed popups that capture visitors at their peak interest
                        </p>
                    </div>
                    <div className="relative bg-base-100 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-6 h-6 text-primary">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Visitor-Friendly Design
                        </h3>
                        <p className="text-base-content/80">Engaging popups that delight rather than annoy, keeping bounce rates low and engagement high
                        </p>
                    </div>
                    <div className="relative bg-base-100 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge w-6 h-6 text-primary">
                                <path d="m12 14 4-4">
                                </path>
                                <path d="M3.34 19a10 10 0 1 1 17.32 0">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Lightning-Fast Setup
                        </h3>
                        <p className="text-base-content/80">Deploy powerful popups in minutes with our no-code builder - no technical expertise needed
                        </p>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <a href="/#howitworks-section">
                        <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300" aria-label="Watch video demonstration">
                            <span>See how it works
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12">
                                </line>
                                <polyline points="12 5 19 12 12 19">
                                </polyline>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </>)
}