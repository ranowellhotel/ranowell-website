import React from "react";

interface AccommodationItem {
    title: string;
    description: string;
    image: string;
    size: string;
    bed: string;
    occupancy: string;
    buttonLink?: string;
}

interface AccommodationTypeSectionProps {
    items: AccommodationItem[];
}

const AccommodationTypeSection: React.FC<AccommodationTypeSectionProps> = ({ items }) => {
    return (
        <section className="w-full bg-white">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[500px] overflow-hidden"
                >
                    {/* Background Image */}
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start pb-4 md:pb-0">
                        <div
                            className="
                                bg-black/60
                                text-white
                                text-center
                                p-4 sm:p-5 md:p-8
                                w-[90%] md:w-auto
                                max-w-[360px] md:max-w-[420px]
                                md:ml-16 lg:ml-24
                                shadow-xl
                                rounded-md
                            "
                        >
                            {/* Title */}
                            <h3 className="text-base sm:text-lg md:text-2xl font-medium mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3">
                                {item.description}
                            </p>

                            {/* Meta */}
                            <div className="text-[11px] sm:text-xs text-gray-300 mb-4">
                                {item.occupancy} &nbsp;|&nbsp; {item.size}
                            </div>

                            {/* Button */}
                            <a
                                href={item.buttonLink || "#"}
                                className="
                                    inline-block
                                    bg-[#5C2D84]
                                    text-white
                                    text-[11px] sm:text-xs
                                    px-6 py-2
                                    rounded-full
                                    tracking-widest
                                    hover:bg-[#4a1f6e]
                                    transition
                                "
                            >
                                VIEW MORE
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AccommodationTypeSection;
