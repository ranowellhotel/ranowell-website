import React from "react";

interface NavigationItem {
    label: string;
}

interface NavigationSectionProps {
    title: string;
    description: string;
    items: NavigationItem[];
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
                                                                 title,
                                                                 description,
                                                                 items,
                                                             }) => {
    return (
        <section className="w-full bg-white py-10 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-[#5C2D84] text-xl sm:text-2xl font-marcellus tracking-wide mb-4">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                    {description}
                </p>

                {/* -------- DESKTOP: inline list with middle bullets -------- */}
                <div className="hidden md:flex justify-center items-center flex-wrap text-sm tracking-widest">
                    {items.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <span className="text-[#5C2D84] font-medium">
                                {item.label}
                            </span>

                            {idx !== items.length - 1 && (
                                <span className="mx-4 text-gray-400">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* -------- MOBILE: simple centered list -------- */}
                <div className="md:hidden flex flex-col items-center gap-3">
                    {items.map((item, idx) => (
                        <span
                            key={idx}
                            className="text-gray-700 text-sm"
                        >
                            {item.label}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NavigationSection;
