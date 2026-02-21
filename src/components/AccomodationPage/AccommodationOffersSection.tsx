import React from "react";

interface OfferItem {
    image: string;
    title: string;
    subtitle: string;
    link?: string;
}

interface AccommodationOffersSectionProps {
    heading: string;
    subHeading: string;
    description: string;
    offers: OfferItem[];
}

const AccommodationOffersSection: React.FC<AccommodationOffersSectionProps> = ({
                                                                                   heading,
                                                                                   subHeading,
                                                                                   description,
                                                                                   offers,
                                                                               }) => {
    return (
        <section
            className="w-full py-16 bg-white"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
        >
            <div className="max-w-[1200px] mx-auto px-6">

                {/* TOP TEXT AREA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                    {/* Left titles */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <h3 className="text-[#5A2D83] text-xl md:text-2xl font-marcellus leading-tight mb-2 uppercase tracking-wide">
                            {heading}
                        </h3>
                        <h2 className="text-[#5A2D83] text-xl md:text-2xl font-marcellus leading-tight uppercase tracking-wide">
                            {subHeading}
                        </h2>
                    </div>

                    {/* Right description */}
                    <p
                        className="text-gray-700 text-sm md:text-[15px] leading-relaxed"
                        data-aos="fade-left"
                        data-aos-delay="250"
                    >
                        {description}
                    </p>
                </div>

                {/* OFFERS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {offers.map((offer, index) => (
                        <a
                            key={index}
                            href={offer.link || "#"}
                            className="group block text-center cursor-pointer opacity-0"
                            data-aos="fade-up"
                            data-aos-delay={300 + index * 150}
                        >
                            <div className="w-full h-[320px] md:h-[350px] overflow-hidden rounded shadow-md">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            <h4 className="mt-4 text-md font-semibold text-gray-800 tracking-wide">
                                {offer.title}
                            </h4>

                            <p className="text-md text-gray-600">
                                {offer.subtitle}
                            </p>
                        </a>
                    ))}
                </div>

                {/* BUTTON */}
                <div className="text-center">
                    <a
                        href="#"
                        className="bg-[#5A2D83] text-white px-6 py-2 text-xs rounded-sm tracking-wide hover:bg-[#4a1f66] transition"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        VIEW ALL OFFERS
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AccommodationOffersSection;
