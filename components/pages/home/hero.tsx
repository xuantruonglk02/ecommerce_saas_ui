import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
    return (
        <>
            <div className="w-full flex items-center justify-center h-screen max-h-[900px]">
                <section className="py-20 text-center max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Boost Conversions by <span className="text-primary">15% in 5 Minutes</span>
                    </h1>
                    <p className="text-xl mb-8 text-foreground/70 max-w-2xl mx-auto">
                        Smart pop-ups that require no coding and wont slow down your site—one-time payment for lifetime access.
                    </p>
                    <a href="/#pricing">
                        <Button size="lg" className="text-lg px-12 py-6 btn btn-primary btn-custom hover:scale-125 transition duration-300 ease-in-out">Pay once use forever!</Button>
                    </a>
                    <p className="mt-2 text-sm text-foreground/60">Limited Spots at $8 — No Monthly Fees</p>
                </section>
            </div>
            <section className="bg-base-100 py-16 px-8 max-w-5xl mx-auto" id="social-proof">
                <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">What Early Users Are Saying
                    </h2>
                    <p className="text-lg text-base-content/80 mt-4">See how they&apos;re boosting conversions and growing effortlessly.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <a href="https://twitter.com/Kmaticu/status/1841558556337901933">
                            <Image
                                src="https://appbars.co/_next/image?url=%2Fproof1.png&w=640&q=75"
                                width="500"
                                height="500"
                                alt="Feedback from Kristian Matic"
                                className="rounded-lg"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://x.com/MarkBuskbjerg/status/1841929325366366484">
                            <Image
                                src="https://appbars.co/_next/image?url=%2Fproof4.png&w=640&q=75"
                                width="500"
                                height="300"
                                alt="Feedback from Kristian Matic"
                                className="rounded-lg"
                                loading="lazy"
                            />
                        </a>
                    </div></div></section>
        </>
    )
}