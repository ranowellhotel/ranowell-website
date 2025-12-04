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
            <div className="space-y-12">
                {items.map((item, i) => (
                    <div key={i} className="relative w-full h-[350px] md:h-[420px] lg:h-[500px]">

                        {/* Background image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-transparent bg-opacity-40"></div>

                        {/* Overlay content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-20 text-white p-5 md:p-8 rounded-md max-w-[300px] md:max-w-[350px] text-center shadow-lg">

                                <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-xs md:text-sm text-gray-200 leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {/* Amenities */}
                                <div className="text-[11px] md:text-xs space-y-1 mb-5 text-gray-300">
                                    <p><strong>Size:</strong> {item.size}</p>
                                    <p><strong>Bed:</strong> {item.bed}</p>
                                    <p><strong>Occupancy:</strong> {item.occupancy}</p>
                                </div>

                                {/* View More Button */}
                                <a
                                    href={item.buttonLink || "#"}
                                    className="inline-block bg-[#5C2D84] text-white text-[11px] md:text-xs px-5 py-2 rounded-sm hover:bg-[#4a1a6a] transition tracking-wide"
                                >
                                    VIEW MORE
                                </a>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default AccommodationTypeSection;
