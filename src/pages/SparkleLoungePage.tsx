import React from "react";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import SparkleHall1 from "@/assets/banquet/sparkle_lounge/webp/sparkleHall1.webp";
import SparkleHall2 from "@/assets/banquet/sparkle_lounge/webp/sparkleHall2.webp";
import SparkleHall3 from "@/assets/banquet/sparkle_lounge/webp/sparkleHall3.webp";
import Sparkle from "@/assets/banquet/sparkle_lounge/webp/sparkle.webp";
import Img6503 from "@/assets/banquet/sparkle_lounge/IMG_6503.jpg";
import Img6504 from "@/assets/banquet/sparkle_lounge/IMG_6504.jpg";
import Img6505 from "@/assets/banquet/sparkle_lounge/IMG_6505.jpg";
import Img6506 from "@/assets/banquet/sparkle_lounge/IMG_6506.jpg";
import Img6507 from "@/assets/banquet/sparkle_lounge/IMG_6507.jpg";
import Img6508 from "@/assets/banquet/sparkle_lounge/IMG_6508.jpg";
import Img6509 from "@/assets/banquet/sparkle_lounge/IMG_6509.jpg";

// Image list
const images = [
    SparkleHall1, SparkleHall2, SparkleHall3, Sparkle,
    Img6503, Img6504, Img6505, Img6506, Img6507, Img6508, Img6509,
];

const SparkleLoungePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">

            {/* BACK BUTTON */}
            <div className="max-w-6xl mx-auto px-4 mt-8">
                <button
                    onClick={() => navigate(-1)}
                    className="
                        flex items-center gap-2
                        text-sm tracking-widest uppercase
                        text-gray-600 hover:text-purple-700
                        transition-all duration-300
                        hover:-translate-x-1
                    "
                >
                    ← Back
                </button>
            </div>

            {/* PAGE TITLE */}
            <div className="text-center mt-10">
                <h2 className="text-[22px] tracking-widest text-xl md:text-3xl font-marcellus text-purple-700 font-medium">
                    Sparkle Lounge
                </h2>
            </div>

            {/* GALLERY GRID */}
            <div className="max-w-6xl mx-auto px-4 pb-20 mt-10
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 60}
                    >
                        <ImageWithLoader
                            src={src}
                            alt={`Sparkle Lounge ${index + 1}`}
                            loading="lazy"
                            containerClassName="w-full h-[300px] rounded shadow-sm"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SparkleLoungePage;
