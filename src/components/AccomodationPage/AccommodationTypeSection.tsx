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
        <section
            className="w-full bg-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            <div>
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="relative w-full h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay={200 + i * 150}
                    >
                        {/* Background image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />

                        {/*❌ Removed: dark overlay blocking image */}
                        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

                        {/* Overlay content ONLY (like original) */}
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay={250 + i * 150}
                        >
                            <div className="bg-black bg-opacity-50 text-white p-5 md:p-8 max-w-[400px] md:max-w-[450px] text-center shadow-lg">

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

                                {/* Button */}
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
