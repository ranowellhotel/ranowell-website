import React, { useState } from "react";
import Header from "@/components/Header";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import GalleryHeaderImg from "@/assets/galleryheader.png";
import Img from "@/assets/gallery/img.png";
import Img1 from "@/assets/gallery/img_1.png";
import Img2 from "@/assets/gallery/img_2.png";
import Img3 from "@/assets/gallery/img_3.png";
import Img4 from "@/assets/gallery/img_4.png";
import Img5 from "@/assets/gallery/img_5.png";
import Img6 from "@/assets/gallery/img_6.png";
import Img7 from "@/assets/gallery/img_7.png";
import Img8 from "@/assets/gallery/img_8.png";
import Img9 from "@/assets/gallery/img_9.png";
import Img10 from "@/assets/gallery/img_10.png";
import Img11 from "@/assets/gallery/img_11.png";
import Img12 from "@/assets/gallery/img_12.png";

const categories = ["ALL", "WEDDINGS", "DINING", "ACCOMMODATION"];

// Dummy data
const galleryItems = [
    { src: Img, category: "WEDDINGS" },
    { src: Img1, category: "DINING" },
    { src: Img2, category: "ACCOMMODATION" },
    { src: Img3, category: "WEDDINGS" },
    { src: Img4, category: "WEDDINGS" },
    { src: Img5, category: "ACCOMMODATION" },
    { src: Img6, category: "ACCOMMODATION" },
    { src: Img7, category: "WEDDINGS" },
    { src: Img8, category: "DINING" },
    { src: Img9, category: "WEDDINGS" },
    { src: Img10, category: "WEDDINGS" },
    { src: Img11, category: "DINING" },
    { src: Img12, category: "WEDDINGS" },
];

const GalleryPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [displayedImages, setDisplayedImages] = useState(galleryItems);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Handle smooth fade-out → fade-in transition
    const handleCategoryChange = (category: string) => {
        if (category === activeCategory) return;

        setIsTransitioning(true);

        setTimeout(() => {
            setActiveCategory(category);

            if (category === "ALL") {
                setDisplayedImages(galleryItems);
            } else {
                setDisplayedImages(
                    galleryItems.filter((item) => item.category === category)
                );
            }
        }, 300);

        setTimeout(() => setIsTransitioning(false), 600);
    };

    return (
        <div className="w-full">

            {/* HEADER */}
            <Header
                image={GalleryHeaderImg}
                title="Explore Moments of Beauty Captured in Every Detail"
                subtitle="RANOWELL GALLERY"
                overlayColor="rgba(0,0,0,0.35)"
            />

            {/* PAGE TITLE */}
            <div className="text-center mt-10">
                <h2 className="text-[22px] tracking-widest text-purple-700 font-medium">
                    GALLERY
                </h2>
            </div>

            {/* CATEGORY TABS — PREMIUM V2 */}
            <div className="relative flex justify-center gap-10 mt-6 mb-10">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;

                    return (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`
                                group relative pb-2 text-sm tracking-widest uppercase 
                                transition-all duration-300

                                ${isActive
                                ? "text-purple-700 font-semibold"
                                : "text-gray-500 hover:text-gray-800"
                            }

                                hover:-translate-y-[2px]
                            `}
                        >
                            {cat}

                            {/* Glow behind active tab */}
                            {isActive && (
                                <span
                                    className="
                                        absolute -inset-x-3 -inset-y-1
                                        bg-purple-200/30 blur-md rounded-full
                                        pointer-events-none animate-fade-in
                                    "
                                ></span>
                            )}

                            {/* Underline with smooth sliding animation */}
                            <span
                                className={`
                                    absolute left-0 -bottom-[2px] h-[2px] bg-purple-700 
                                    transition-all duration-500 ease-out
                                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                                `}
                            ></span>
                        </button>
                    );
                })}
            </div>

            {/* GALLERY GRID */}
            <div
                className={`
                    max-w-6xl mx-auto px-4 pb-20 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5
                    transition-opacity duration-500
                    ${isTransitioning ? "opacity-0" : "opacity-100"}
                `}
            >
                {displayedImages.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                    >
                        <ImageWithLoader
                            src={item.src}
                            alt="Gallery"
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

export default GalleryPage;
