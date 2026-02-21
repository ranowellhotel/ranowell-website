import React from "react";

interface VideoSectionProps {
    label?: string;
    title: string;
    description: string;
    videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
                                                       label = "RANOWELL",
                                                       title,
                                                       description,
                                                       videoSrc
                                                   }) => {
    return (
        <section
            className="py-20 bg-white text-center px-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            {/* Label */}
            <p
                className="text-xs font-semibold tracking-widest text-[#5C2D84] uppercase mb-2"
                data-aos="fade-up"
                data-aos-delay="150"
            >
                {label}
            </p>

            {/* Title */}
            <h2
                className="text-[#5C2D84] text-2xl md:text-3xl font-marcellus leading-snug max-w-4xl mx-auto uppercase"
                data-aos="fade-up"
                data-aos-delay="250"
            >
                {title}
            </h2>

            {/* Description */}
            <p
                className="text-gray-700 max-w-5xl mx-auto mt-6 text-sm md:text-base leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="350"
            >
                {description}
            </p>

            {/* VIDEO */}
            <div
                className="max-w-6xl mx-auto mt-12"
                data-aos="fade-up"
                data-aos-delay="450"
            >
                <video
                    className="w-full rounded-md shadow-md"
                    controls
                    preload="none"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </section>
    );
};

export default VideoSection;
