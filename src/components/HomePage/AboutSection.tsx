import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface AboutSectionProps {
    faqs: FAQItem[];
    images: string[]; // Must be exactly 4 images based on your layout
}

const AboutSection: React.FC<AboutSectionProps> = ({ faqs, images }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* ---------- LEFT: FAQ Section ---------- */}
                <div>
                    <h2 className="text-[#5C2D84] text-2xl md:text-3xl font-semibold uppercase tracking-wide mb-8">
                        A Little Bit More to Help You <br /> Plan Your Stay
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border-b pb-3 cursor-pointer"
                                onClick={() => toggleFAQ(idx)}
                            >
                                {/* Question */}
                                <div className="flex justify-between items-center text-gray-900 font-medium">
                                    <span>{faq.question}</span>
                                    <span className="text-xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                                </div>

                                {/* Answer */}
                                <div
                                    className={`mt-2 text-sm text-gray-600 transition-all duration-300 overflow-hidden ${
                                        openIndex === idx ? "max-h-40" : "max-h-0"
                                    }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- RIGHT: IMAGE GRID ---------- */}
                <div className="grid grid-cols-2 gap-4">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="About Ranowell"
                            className="w-full h-56 object-cover rounded-md shadow-md"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
