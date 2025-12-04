import React from "react";

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
        <section className="py-20 bg-white px-6">
            <div className="max-w-7xl mx-auto space-y-24">

                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                            index % 2 !== 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* TEXT BLOCK */}
                        <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                            <h3 className="text-[#5C2D84] text-xl md:text-2xl font-semibold tracking-wide mb-4 uppercase">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <a
                                href={item.buttonLink || "#"}
                                target="_blank"
                                className="inline-block bg-[#5C2D84] text-white px-7 py-3 rounded-md text-sm tracking-widest hover:bg-[#4a1f6e] transition"
                            >
                                VIEW MORE
                            </a>
                        </div>

                        {/* IMAGE BLOCK */}
                        <div
                            className={`${
                                index % 2 !== 0 ? "md:order-1" : ""
                            } w-full h-full`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default BanquetSection;
