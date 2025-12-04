import React from "react";
import { FaStar } from "react-icons/fa";

interface CommentCardProps {
    image: string;
    quote: string;
    rating?: number;
    author: string;
    location: string;
    bgColor?: string; // optional custom background
}

const CommentCard: React.FC<CommentCardProps> = ({
                                                     image,
                                                     quote,
                                                     rating = 5,
                                                     author,
                                                     location,
                                                     bgColor = "#F5E8FF", // default matches your design
                                                 }) => {
    return (
        <div
            className="w-full max-w-md mx-auto overflow-hidden shadow-lg"
            style={{ backgroundColor: bgColor }} // ✅ Applied background here
        >
            {/* Top Image */}
            <img
                src={image}
                alt="Hotel Review"
                className="w-full h-56 object-cover"
            />

            {/* Content Area */}
            <div className="p-6">
                {/* Quote */}
                <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-6">
                    "{quote}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <FaStar key={i} className="text-purple-600" />
                    ))}
                </div>

                {/* Author */}
                <p className="text-gray-900 text-sm font-medium">
                    — {author}, {location}
                </p>
            </div>
        </div>
    );
};

export default CommentCard;
