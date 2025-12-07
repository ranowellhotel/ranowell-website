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
        <section
            className="py-20 bg-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* ---------- LEFT: FAQ Section ---------- */}
                <div>
                    <h2
                        className="text-[#5C2D84] text-2xl md:text-3xl font-marcellus uppercase tracking-wide mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        A Little Bit More to Help You <br /> Plan Your Stay
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="
                                    border-b pb-3 cursor-pointer
                                    transition-all duration-300
                                    opacity-0 translate-y-3
                                "
                                data-aos="fade-up"
                                data-aos-delay={250 + idx * 120}
                                onClick={() => toggleFAQ(idx)}
                            >
                                {/* Question */}
                                <div className="flex justify-between items-center text-gray-900 font-medium">
                                    <span>{faq.question}</span>
                                    <span className="text-xl transition-colors">
                                        {openIndex === idx ? "−" : "+"}
                                    </span>
                                </div>

                                {/* Answer */}
                                <div
                                    className={`
                                        mt-2 text-sm text-gray-600 transition-all duration-300 overflow-hidden
                                        ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- RIGHT: IMAGE GRID ---------- */}
                <div
                    className="grid grid-cols-2 gap-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="About Ranowell"
                            className="
                                w-full h-72 object-cover shadow-md rounded-md
                                transition-all duration-500
                                hover:scale-105 hover:shadow-xl
                                opacity-0 translate-y-4
                            "
                            data-aos="fade-up"
                            data-aos-delay={400 + i * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
