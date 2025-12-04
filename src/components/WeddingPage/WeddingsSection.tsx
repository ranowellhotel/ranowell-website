import React from "react";

interface WeddingItem {
    image: string;
    coupleNames: string;
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
                                                             buttonLink = "#"
                                                         }) => {
    return (
        <section className="py-20 bg-white px-6">
            <div className="max-w-7xl mx-auto">

                {/* -------- GRID: TEXT LEFT, DESCRIPTION RIGHT -------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

                    {/* LEFT TEXT */}
                    <div>
                        <p className="text-xs tracking-widest uppercase text-[#5C2D84] font-semibold mb-2">
                            {label}
                        </p>

                        <h2 className="text-[#5C2D84] text-3xl md:text-4xl font-semibold leading-snug">
                            {title}
                        </h2>
                    </div>

                    {/* RIGHT TEXT */}
                    <div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {description}
                        </p>
                    </div>

                </div>

                {/* -------- 3 IMAGE GRID -------- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {items.map((item, idx) => (
                        <div key={idx} className="text-center">
                            <img
                                src={item.image}
                                alt={item.coupleNames}
                                className="w-full h-64 object-cover rounded-lg shadow-md"
                            />
                            <p className="mt-4 text-gray-800 font-medium">
                                {item.coupleNames}
                            </p>
                        </div>
                    ))}
                </div>

                {/* -------- BUTTON -------- */}
                <div className="text-center">
                    <a
                        href={buttonLink}
                        target="_blank"
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
