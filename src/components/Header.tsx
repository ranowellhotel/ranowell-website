import React from "react";

interface HeaderProps {
    image: string;            // Background image
    title: string;            // Main title text
    subtitle?: string;        // Optional subtext
    overlayColor?: string;    // Tailwind bg color like "bg-black" | "bg-purple-900"
    overlayOpacity?: string;  // Opacity like "bg-opacity-40"
    height?: string;          // Custom height (default: h-[60vh])
}

const Header: React.FC<HeaderProps> = ({
                                           image,
                                           title,
                                           subtitle,
                                           overlayColor = "bg-black",
                                           overlayOpacity = "bg-opacity-40",
                                           height = "h-[82vh]"
                                       }) => {
    return (
        <div
            className={`relative w-full ${height} bg-center bg-cover flex items-center justify-center`}
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}></div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-4">
                {subtitle && (
                    <p className="text-xs md:text-sm tracking-widest mb-2 uppercase">
                        {subtitle}
                    </p>
                )}

                <h1 className="text-2xl md:text-4xl font-semibold leading-snug max-w-2xl mx-auto">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Header;
