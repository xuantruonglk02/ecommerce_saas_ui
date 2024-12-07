export function VideoShowcase() {
    return (
        <>
            <section className="bg-gray-100 overflow-hidden" id="video-section">
                <div className="py-24 px-8 max-w-5xl mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="font-medium text-primary mb-8">Video Showcase
                        </p>
                        <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-4">Instant Popups. Instant Results.
                        </h2>
                        <p className="text-lg text-base-content/80">Set up powerful popups in minutes and watch your conversions soar.
                        </p>
                    </div>
                    <div className="relative w-full max-w-3xl mx-auto">
                        <div className="relative z-10 bg-base-100 p-8 rounded-lg shadow-lg">
                            <picture>
                                <source srcSet="/cover.png" media="(max-width: 767px)" />
                            </picture>
                            <video autoPlay muted loop playsInline controls width="100%" className="rounded-lg shadow-md object-cover w-full h-auto" preload="metadata" poster="/cover.png" src="https://appbars.s3.eu-north-1.amazonaws.com/appbarsvid.webm">Your browser does not support the video tag.
                                <a href="https://appbars.s3.eu-north-1.amazonaws.com/appbarsvidred.mp4">Download the video
                                </a> instead.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}