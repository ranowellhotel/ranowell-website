import React from "react";

interface WeddingItem {
    image: string;
    coupleNames: string;
    pixiesetUrl: string;
}

interface WeddingsSectionProps {
    label?: string;
    title: string;
    description: string;
    items: WeddingItem[];
    buttonLink?: string;
}

const WeddingsSection: React.FC<WeddingsSectionProps> = ({
                                                             label = "RANOWELL WEDDINGS",
                                                             title,
                                                             description,
                                                             items,
                                                             buttonLink = "#",
                                                         }) => {
    return (
        <section
            className="py-20 bg-white px-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            <div className="max-w-7xl mx-auto">

                {/* -------- GRID: TEXT LEFT, DESCRIPTION RIGHT -------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

                    {/* LEFT TEXT */}
                    <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
                        <p className="text-xs tracking-widest uppercase text-[#5C2D84] font-semibold mb-2">
                            {label}
                        </p>

                        <h2 className="text-[#5C2D84] text-3xl md:text-4xl font-marcellus leading-snug">
                            {title}
                        </h2>
                    </div>

                    {/* RIGHT TEXT */}
                    <div data-aos="fade-left" data-aos-delay="250" data-aos-duration="900">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {description}
                        </p>
                    </div>

                </div>

                {/* -------- IMAGE GRID -------- */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.pixiesetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center group opacity-0"
                            data-aos="fade-up"
                            data-aos-delay={350 + idx * 150}
                            data-aos-duration="900"
                        >
                            <div className="overflow-hidden rounded-tl-xl rounded-br-xl shadow-lg">
                                <img
                                    src={item.image}
                                    alt={item.coupleNames}
                                    className="
                                        w-full h-85 object-cover
                                        transition-transform duration-500
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            <p className="mt-4 text-gray-800 font-medium group-hover:text-[#5C2D84] transition">
                                {item.coupleNames}
                            </p>
                        </a>
                    ))}
                </div>

                {/* -------- BUTTON -------- */}
                <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="900"
                >
                    <a
                        href={buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#5C2D84] text-white px-8 py-3 rounded-md tracking-wider text-sm hover:bg-[#4a1f6e] transition"
                    >
                        VIEW MORE ON PIXIESET
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WeddingsSection;
