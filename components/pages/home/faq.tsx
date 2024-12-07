import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    const faq_text = [
        {
            question: "What is your popup SaaS platform?",
            answer: "Our platform lets you create and deploy customizable popups for your website easily, with no coding required."
        },
        {
            question: "How can popups benefit my website?",
            answer: "Popups can boost conversions by capturing leads, promoting offers, reducing cart abandonment, and engaging visitors."
        },
        {
            question: "Is it easy to use for non-technical users?",
            answer: "Yes, our drag-and-drop editor and templates make it simple for anyone to create and customize popups."
        },
        {
            question: "Does your platform support A/B testing?",
            answer: "Yes, you can test different popup versions to see which performs better."
        }
    ]
    return (<>
        <section className="bg-base-200" id="faq">
            <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="inline-block font-semibold text-primary mb-4">FAQ
                    </p>
                    <h3 className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions
                    </h3>
                </div>
                <Accordion type="single" collapsible className="basis-1/2">
                    {
                        faq_text.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden">
                                    <div className="space-y-2 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </section>

    </>)
}