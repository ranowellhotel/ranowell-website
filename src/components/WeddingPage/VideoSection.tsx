import React from "react";

interface VideoSectionProps {
    label?: string;       // "RANOWELL"
    title: string;        // Main heading
    description: string;  // Paragraph text
    videoSrc: string;     // Video file URL or MP4 import
}

const VideoSection: React.FC<VideoSectionProps> = ({
                                                       label = "RANOWELL",
                                                       title,
                                                       description,
                                                       videoSrc
                                                   }) => {
    return (
        <section className="py-20 bg-white text-center px-6">

            {/* Label */}
            <p className="text-xs font-semibold tracking-widest text-[#5C2D84] uppercase mb-2">
                {label}
            </p>

            {/* Title */}
            <h2 className="text-[#5C2D84] text-2xl md:text-3xl font-semibold leading-snug max-w-3xl mx-auto uppercase">
                {title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
                {description}
            </p>

            {/* VIDEO */}
            <div className="max-w-4xl mx-auto mt-12">
                <video
                    className="w-full rounded-md shadow-md"
                    controls
                    preload="metadata"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </section>
    );
};

export default VideoSection;
