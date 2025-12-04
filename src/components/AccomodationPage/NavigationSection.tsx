import React from "react";

interface NavItem {
    label: string;
    link?: string; // optional if you want router links
}

interface NavigationSectionProps {
    description: string;
    title: string;
    items: NavItem[];
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
                                                                 description,
                                                                 title,
                                                                 items,
                                                             }) => {
    return (
        <section className="py-16 bg-white text-center px-6">

            {/* Description */}
            <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                {description}
            </p>

            {/* Title */}
            <h2 className="text-[#5C2D84] text-xl md:text-2xl font-semibold tracking-wide uppercase mt-6">
                {title}
            </h2>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8">

                {items.map((item, i) => (
                    <React.Fragment key={i}>

                        {/* Label */}
                        <a
                            href={item.link || "#"}
                            className="text-xs md:text-sm tracking-wider uppercase text-black hover:text-[#5C2D84] transition font-medium"
                        >
                            {item.label}
                        </a>

                        {/* Divider Bullet (except after last item) */}
                        {i !== items.length - 1 && (
                            <span className="text-black text-lg leading-none select-none">•</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default NavigationSection;
