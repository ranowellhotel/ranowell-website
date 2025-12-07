import React from "react";
import CommentCard from "@/components/CommentCard";

interface StoryItem {
    image: string;
    quote: string;
    author: string;
    location: string;
    rating?: number;
    bgColor?: string;
}

interface StoriesSectionProps {
    items: StoryItem[];
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ items }) => {
    return (
        <section
            className="py-20 bg-[#F2F2F2]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
        >
            {/* Title */}
            <h2
                className="text-center text-xl md:text-3xl font-marcellus tracking-widest text-[#5C2D84] uppercase"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                The Stories of Ranowell
            </h2>

            {/* Subtitle */}
            <p
                className="max-w-4xl mx-auto text-center text-gray-600 mt-10 text-sm md:text-base leading-relaxed px-4"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Our guest testimonials offer a glimpse into the heart of our Sri Lankan hospitality —
                where every stay becomes a cherished memory. Through their stories, you’ll discover
                the warmth of our people, the flavors of authentic island cuisine, and the beauty of
                our coastal and cultural landscapes. Each review reflects more than just a visit; it’s
                a celebration of comfort, connection, and the timeless charm that makes Sri Lanka a
                destination to remember.
            </p>

            {/* Staggered Grid */}
            <div
                className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                {items.map((story, i) => {
                    // Middle column stagger
                    const isMiddleColumn = (i % 3 === 1);

                    return (
                        <div
                            key={i}
                            className={`
                                w-full
                                ${isMiddleColumn ? "lg:mt-20" : ""}
                                transition-all duration-500 ease-out
                                hover:scale-105 hover:-translate-y-2
                                cursor-pointer
                                opacity-0 translate-y-4
                            `}
                            data-aos="fade-up"
                            data-aos-delay={200 + i * 150}
                        >
                            <CommentCard
                                image={story.image}
                                quote={story.quote}
                                rating={story.rating || 5}
                                author={story.author}
                                location={story.location}
                                bgColor={story.bgColor}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StoriesSection;
