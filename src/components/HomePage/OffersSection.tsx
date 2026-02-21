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
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // ------------------------------------
    // RESPONSIVE ITEMS PER PAGE
    // ------------------------------------
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // ------------------------------------
    // AUTO SLIDE
    // ------------------------------------
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextPage = Math.floor(prev / itemsPerPage) + 1;
                return (nextPage % totalPages) * itemsPerPage;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [itemsPerPage, totalPages]);

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

            {/* Carousel */}
            <div className="relative max-w-7xl mx-auto mt-12 overflow-hidden px-4">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
                    }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="
                                flex-shrink-0
                                w-full
                                md:w-1/2
                                lg:w-1/3
                                px-3
                            "
                        >
                            <div className="relative overflow-hidden">
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
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            onClick={() => setCurrentIndex(pageIndex * itemsPerPage)}
                            className={`w-3 h-3 rounded-full transition-all
                                ${
                                Math.floor(currentIndex / itemsPerPage) === pageIndex
                                    ? "bg-gray-700 scale-110"
                                    : "bg-gray-300"
                            }
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
