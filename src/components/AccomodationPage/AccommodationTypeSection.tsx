import React, { useState } from "react";

interface AccommodationItem {
    title: string;
    description: string;
    image: string;
    size: string;
    bed: string;
    occupancy: string;
    buttonLink?: string;
}

interface AccommodationTypeSectionProps {
    items: AccommodationItem[];
}

const AccommodationTypeSection: React.FC<AccommodationTypeSectionProps> = ({ items }) => {
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const [targetUrl, setTargetUrl] = useState<string>("");

    const handleViewMoreClick = (url: string) => {
        setTargetUrl(url);
        setShowBookingPopup(true);
    };

    const handleContinueBooking = () => {
        if (targetUrl) {
            window.open(targetUrl, "_blank", "noopener,noreferrer");
        }
        setShowBookingPopup(false);
    };

    return (
        <section className="w-full bg-white">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[500px] overflow-hidden"
                >
                    {/* Background Image */}
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-start pb-4 md:pb-0">
                        <div
                            className="
                                bg-black/60
                                text-white
                                text-center
                                p-4 sm:p-5 md:p-8
                                w-[90%] md:w-auto
                                max-w-[360px] md:max-w-[420px]
                                md:ml-16 lg:ml-24
                                shadow-xl
                                rounded-md
                            "
                        >
                            {/* Title */}
                            <h3 className="text-base sm:text-lg md:text-2xl font-medium mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3">
                                {item.description}
                            </p>

                            {/* Meta */}
                            <div className="text-[11px] sm:text-xs text-gray-300 mb-4">
                                {item.occupancy} &nbsp;|&nbsp; {item.size}
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => handleViewMoreClick(item.buttonLink || "#")}
                                className="bg-[#5A2D83] text-white px-6 py-2 text-xs rounded-sm tracking-wide hover:bg-[#4a1f66] transition"
                            >
                                VIEW MORE
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* ------------------ BOOKING CONFIRMATION MODAL ------------------ */}
            {showBookingPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 text-center shadow-xl animate-fadeInSlow">

                        <h3 className="text-[#5C2D84] text-lg font-marcellus uppercase mb-3">
                            Redirect Notice
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                            You will be redirected to <strong>Booking.com</strong> to
                            complete your booking process.
                            <br />
                            Do you wish to continue?
                        </p>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setShowBookingPopup(false)}
                                className="px-5 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleContinueBooking}
                                className="px-6 py-2 text-sm bg-[#6A1B9A] text-white rounded hover:bg-[#58167F] transition"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AccommodationTypeSection;
