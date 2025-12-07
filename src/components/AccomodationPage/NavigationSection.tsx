import React from "react";

interface NavItem {
    label: string;
    link?: string;
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
        <section
            className="py-16 bg-white text-center px-6"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
        >
            {/* Description */}
            <p
                className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="150"
            >
                {description}
            </p>

            {/* Title */}
            <h2
                className="text-[#5C2D84] text-xl md:text-2xl font-marcellus tracking-wide uppercase mt-10"
                data-aos="fade-up"
                data-aos-delay="250"
            >
                {title}
            </h2>

            {/* Navigation Links */}
            <div
                className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8"
                data-aos="fade-up"
                data-aos-delay="350"
            >
                {items.map((item, i) => (
                    <React.Fragment key={i}>
                        {/* Label */}
                        <a
                            href={item.link || "#"}
                            className="
                                text-xs md:text-sm font-marcellus tracking-wider uppercase
                                text-black hover:text-[#5C2D84] transition font-medium
                                opacity-0 translate-y-2
                            "
                            data-aos="fade-up"
                            data-aos-delay={400 + i * 120} // stagger effect
                        >
                            {item.label}
                        </a>

                        {/* Divider Bullet */}
                        {i !== items.length - 1 && (
                            <span
                                className="text-black text-lg leading-none select-none opacity-0"
                                data-aos="fade-up"
                                data-aos-delay={420 + i * 120}
                            >
                                •
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default NavigationSection;
