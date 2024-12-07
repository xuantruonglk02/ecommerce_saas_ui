export default function LastHero() {
    return (
        <>
            <section className="bg-base-200 flex items-center justify-center">
                <div className="text-center text-neutral-content p-1">
                    <div className="flex flex-col items-center w-full max-w-screen-lg p-4 md:p-6 bg-white-100 bg-opacity-90 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4 text-base-content">
                            I guess all I&apos;m trying to say is you should smash the damn button.
                        </h2>
                        <div className="mb-4 mt-8">
                            <div className="flex flex-col items-center mt-8">
                                <button className="btn btn-primary btn-custom text-lg">Pay once use forever!
                                </button>
                                <p className="mt-2 text-sm text-gray-600">Limited Spots at $8 — No Monthly Fees
                                </p>
                            </div>
                        </div>
                        <p className="text-base md:text-lg opacity-80 leading-relaxed mt-2 mb-20 text-base-content">
                            Be quick! Spots are limited for Pay once use Forever.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}