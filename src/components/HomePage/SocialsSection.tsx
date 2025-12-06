import React from "react";

interface SocialItem {
    image: string;
    link: string; // URL to Instagram, Facebook, TikTok etc.
}

interface SocialsSectionProps {
    items: SocialItem[];
}

const SocialsSection: React.FC<SocialsSectionProps> = ({ items }) => {
    return (
        <section className="py-20 bg-[#F2F2F2] text-center">
            {/* Title */}
            <h2 className="text-[#5C2D84] text-xl md:text-3xl font-marcellus uppercase tracking-wider">
                Check Our Stories
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-gray-600 text-sm md:text-base">
                Tag Us And Let’s Connect{" "}
                <a
                    href="https://instagram.com/ranowell_hotels"
                    target="_blank"
                    className="text-[#5C2D84] underline hover:opacity-75"
                >
                    @ranowell_hotels
                </a>
            </p>

            {/* GRID */}
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {items.map((post, i) => (
                    <a
                        key={i}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded shadow-md"
                    >
                        <img
                            src={post.image}
                            alt="Ranowell Hotel Social Post"
                            className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialsSection;
