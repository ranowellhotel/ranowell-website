import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface AboutSectionProps {
    faqs: FAQItem[];
    images: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ faqs, images }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* ---------- LEFT: FAQ ---------- */}
                <div>
                    <h2 className="text-[#5C2D84] text-lg sm:text-xl md:text-3xl font-marcellus uppercase tracking-wide mb-6 md:mb-8 leading-snug">
                        A Little Bit More to Help You
                        <br className="hidden sm:block" />
                        Plan Your Stay
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border-b pb-3 cursor-pointer transition-all duration-300"
                                onClick={() => toggleFAQ(idx)}
                            >
                                {/* Question */}
                                <div className="flex justify-between items-start gap-3 text-gray-900 font-medium">
                                    <span className="text-sm sm:text-base leading-relaxed">
                                        {faq.question}
                                    </span>
                                    <span className="text-xl text-[#5C2D84] shrink-0">
                                        {openIndex === idx ? "−" : "+"}
                                    </span>
                                </div>

                                {/* Answer */}
                                <div
                                    className={`mt-2 text-sm sm:text-base text-gray-600 leading-relaxed overflow-hidden transition-all duration-300
                                        ${
                                        openIndex === idx
                                            ? "max-h-48 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }
                                    `}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- RIGHT: IMAGES ---------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-md shadow-md"
                        >
                            <img
                                src={img}
                                alt="About Ranowell"
                                loading="lazy"
                                className="
                                    w-full
                                    h-52 sm:h-60 md:h-72
                                    object-cover
                                    transition-transform duration-500
                                    hover:scale-105
                                "
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
