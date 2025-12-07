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

    const itemsPerPage = 3;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextPage = Math.floor(prev / itemsPerPage) + 1;
                return (nextPage % totalPages) * itemsPerPage;
            });
        }, 4000);
        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <section
            className="py-16 bg-white text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            {/* Title */}
            <h2
                className="max-w-2xl mx-auto text-2xl md:text-3xl font-marcellus tracking-wide text-[#6E249D] uppercase"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Exclusive Offers, Unforgettable Experiences
            </h2>

            {/* Subtitle */}
            <p
                className="max-w-3xl mx-auto text-gray-600 mt-10 text-base leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Discover exclusive offers designed to enhance your stay with special in-room amenities,
                complimentary upgrades on availability, spa discounts and more. Choose from romantic
                getaways to extended vacations, at Ranowell Hotels and Resorts.
            </p>

            {/* Carousel Container */}
            <div
                className="relative max-w-7xl mx-auto mt-12 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="basis-1/3 flex-shrink-0 px-4"
                            data-aos="fade-up"
                            data-aos-delay={200 + idx * 150}
                        >
                            <div className="w-full relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[500px] object-cover shadow-md
                                               hover:scale-105 transition-transform duration-300"
                                />

                                <h3
                                    className="
                                        absolute bottom-4 left-1/2 -translate-x-1/2 w-auto px-4
                                        text-center text-xl tracking-widest text-white
                                        font-marcellus uppercase drop-shadow-lg
                                    "
                                >
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div
                    className="flex justify-center gap-2 mt-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div
                            key={pageIndex}
                            onClick={() => setCurrentIndex(pageIndex * itemsPerPage)}
                            className={`
                                w-3 h-3 rounded-full cursor-pointer transition-all
                                ${Math.floor(currentIndex / itemsPerPage) === pageIndex
                                ? "bg-gray-700 scale-110"
                                : "bg-gray-300"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
