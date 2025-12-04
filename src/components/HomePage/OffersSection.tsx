import React, { useState, useEffect } from "react";

interface OfferItem {
    image: string;
    title: string;
}

interface OffersSectionProps {
    items: OfferItem[];
}

const OffersSection: React.FC<OffersSectionProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <section className="py-16 bg-white text-center">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#5C2D84] uppercase">
                Exclusive Offers, Unforgettable Experiences
            </h2>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-sm leading-relaxed">
                Discover exclusive offers designed to enhance your stay with special in-room amenities,
                complimentary upgrades on availability, spa discounts and more. Choose from romantic
                getaways to extended vacations, at Ranowell Hotels and Resorts.
            </p>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto mt-12 overflow-hidden">

                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, idx) => (
                        <div key={idx} className="min-w-full flex justify-center px-4">
                            {/* Image Card */}
                            <div className="w-full max-w-sm">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-80 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="mt-3 text-lg font-semibold tracking-widest text-black uppercase">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {items.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                                currentIndex === idx ? "bg-gray-700" : "bg-gray-300"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
