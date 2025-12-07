import React from "react";

interface HeaderProps {
    image: string;
    title: string;
    subtitle?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    height?: string;
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
            // data-aos="fade-up"
            // data-aos-duration="1200"
            // data-aos-delay="150"
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1000"
            ></div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-4">

                {subtitle && (
                    <p
                        className="text-xs md:text-sm tracking-widest mb-2 uppercase"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="900"
                    >
                        {subtitle}
                    </p>
                )}

                <h1
                    className="text-2xl md:text-4xl font-semibold leading-snug max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="380"
                    data-aos-duration="1000"
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Header;
