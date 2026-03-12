import React, { useState } from "react";
import Header from "@/components/Header";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import GalleryHeaderImg from "@/assets/galleryheader.webp";
import Img from "@/assets/gallery/webp/img.webp";
import Img1 from "@/assets/gallery/webp/img_1.webp";
import Img2 from "@/assets/gallery/webp/img_2.webp";
import Img3 from "@/assets/gallery/webp/img_3.webp";
import Img4 from "@/assets/gallery/webp/img_4.webp";
import Img5 from "@/assets/gallery/webp/img_5.webp";
import Img6 from "@/assets/gallery/webp/img_6.webp";
import Img7 from "@/assets/gallery/webp/img_7.webp";
import Img8 from "@/assets/gallery/webp/img_8.webp";
import Img9 from "@/assets/gallery/webp/img_9.webp";
import Img10 from "@/assets/gallery/webp/img_10.webp";
import Img11 from "@/assets/gallery/webp/img_11.webp";
import Img12 from "@/assets/gallery/webp/img_12.webp";

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

            {/* CATEGORY — MOBILE DROPDOWN */}
            <div className="md:hidden flex justify-center mt-6 mb-10 px-4">
                <select
                    value={activeCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="
                        w-full max-w-xs px-4 py-3
                        text-sm tracking-widest uppercase text-purple-700 font-semibold
                        bg-white border border-purple-300 rounded-lg
                        shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400
                        appearance-none
                        bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%237c3aed%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.293l3.71-4.06a.75.75%200%20011.08%201.04l-4.25%204.65a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]
                        bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat
                        cursor-pointer transition-all duration-300
                    "
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* CATEGORY TABS — DESKTOP */}
            <div className="hidden md:flex relative justify-center gap-10 mt-6 mb-10">
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
