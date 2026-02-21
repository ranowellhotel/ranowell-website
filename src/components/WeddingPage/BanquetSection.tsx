import React from "react";
import { Link } from "react-router-dom";

interface BanquetItem {
    title: string;
    description: string;
    image: string;
    buttonLink?: string;
}

interface BanquetSectionProps {
    items: BanquetItem[];
}

const BanquetSection: React.FC<BanquetSectionProps> = ({ items }) => {
    return (
        <section
            className="py-20 bg-white px-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            <div className="max-w-7xl mx-auto space-y-24">

                {items.map((item, index) => {
                    const isReversed = index % 2 !== 0;

                    return (
                        <div
                            key={index}
                            className={`
                                grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                                ${isReversed ? "md:flex-row-reverse" : ""}
                            `}
                        >
                            {/* TEXT BLOCK */}
                            <div
                                className={`${isReversed ? "md:order-2" : ""}`}
                                data-aos={isReversed ? "fade-left" : "fade-right"}
                                data-aos-delay="200"
                                data-aos-duration="900"
                            >
                                <h3 className="text-[#5C2D84] text-xl md:text-3xl font-marcellus tracking-wide mb-4 uppercase">
                                    {item.title}
                                </h3>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                {/* ✅ SPA NAVIGATION */}
                                <Link
                                    to={item.buttonLink || "/"}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className="
                                        inline-block bg-[#5C2D84] text-white
                                        px-7 py-3 rounded-md text-sm tracking-widest
                                        hover:bg-[#4a1f6e] transition
                                    "
                                >
                                    VIEW MORE
                                </Link>
                            </div>

                            {/* IMAGE BLOCK */}
                            <div
                                className={`${isReversed ? "md:order-1" : ""} w-full h-full`}
                                data-aos={isReversed ? "fade-right" : "fade-left"}
                                data-aos-delay="250"
                                data-aos-duration="900"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default BanquetSection;
