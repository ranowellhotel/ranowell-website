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
        <section className="py-20 bg-[#F2F2F2]">
            {/* Title */}
            <h2 className="text-center text-xl md:text-2xl font-semibold tracking-widest text-[#5C2D84] uppercase">
                The Stories of Ranowell
            </h2>

            {/* Subtitle */}
            <p className="max-w-4xl mx-auto text-center text-gray-600 mt-4 text-sm md:text-base leading-relaxed px-4">
                Our guest testimonials offer a glimpse into the heart of our Sri Lankan hospitality —
                where every stay becomes a cherished memory. Through their stories, you’ll discover
                the warmth of our people, the flavors of authentic island cuisine, and the beauty of
                our coastal and cultural landscapes. Each review reflects more than just a visit;
                it’s a celebration of comfort, connection, and the timeless charm that makes Sri Lanka
                a destination to remember.
            </p>

            {/* Staggered Grid */}
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">

                {items.map((story, i) => {

                    // Apply stagger only to the MIDDLE column
                    const isMiddleColumn = (i % 3 === 1); // index 1, 4, 7...

                    return (
                        <div
                            key={i}
                            className={`
                                w-full
                                ${isMiddleColumn ? "lg:mt-20" : ""}
                            `}
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
