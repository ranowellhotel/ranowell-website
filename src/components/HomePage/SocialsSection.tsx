import React from "react";
import { Facebook } from "lucide-react";

interface SocialItem {
    image: string;
    postUrl: string;
}

interface SocialsSectionProps {
    items: SocialItem[];
}

const SocialsSection: React.FC<SocialsSectionProps> = ({ items }) => {
    return (
        <section
            className="py-20 bg-[#F2F2F2] text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            {/* Title */}
            <h2
                className="text-[#5C2D84] text-xl md:text-3xl font-marcellus uppercase tracking-wider"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Check Our Stories
            </h2>

            {/* Subtitle */}
            <p
                className="mt-2 text-gray-600 text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Follow us on Facebook{" "}
                <a
                    href="https://www.facebook.com/ranowellhotels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C2D84] underline hover:opacity-75"
                >
                    @Ranowell Hotels
                </a>
            </p>

            {/* GRID */}
            <div
                className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                {items.map((post, i) => (
                    <a
                        key={i}
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay={450 + i * 120}
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden">
                            <img
                                src={post.image}
                                alt="Ranowell Facebook Post"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Facebook Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                                    <div className="bg-[#1877F2] text-white p-3 rounded-full shadow-lg">
                                        <Facebook size={22} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 text-sm text-gray-600 flex items-center justify-between">
                            <span>View on Facebook</span>
                            <Facebook size={16} className="text-[#1877F2]" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialsSection;
