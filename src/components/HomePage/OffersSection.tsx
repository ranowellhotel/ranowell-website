import React from "react";

interface OfferItem {
    image: string;
    title: string;
}

interface OffersSectionProps {
    items: OfferItem[];
}

const OffersSection: React.FC<OffersSectionProps> = ({ items }) => {
    return (
        <section className="py-16 bg-white text-center">
            {/* Title */}
            <h2 className="max-w-2xl mx-auto text-2xl md:text-3xl font-marcellus tracking-wide text-[#6E249D] uppercase">
                Exclusive Offers, Unforgettable Experiences
            </h2>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-gray-600 mt-8 text-base leading-relaxed px-4">
                Discover exclusive offers designed to enhance your stay with special in-room amenities,
                complimentary upgrades on availability, spa discounts and more.
            </p>

            {/* Static Grid */}
            <div className="max-w-7xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                    <div key={idx} className="relative overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="
                                w-full
                                h-[280px]
                                md:h-[380px]
                                lg:h-[500px]
                                object-cover
                                transition-transform duration-300
                                hover:scale-105
                            "
                        />

                        <h3 className="
                            absolute bottom-4 left-1/2 -translate-x-1/2
                            px-4 text-white text-lg md:text-xl
                            tracking-widest font-marcellus uppercase
                            drop-shadow-lg
                        ">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OffersSection;

