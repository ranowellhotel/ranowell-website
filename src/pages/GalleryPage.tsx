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

// Weddings — photos already shot in the halls are reused from the banquet
// assets so we don't duplicate them; the rest live in gallery/weddings.
import Wed1 from "@/assets/banquet/kings_court/webp/kingsHall9.webp";
import Wed2 from "@/assets/banquet/kings_court/webp/kingsHall10.webp";
import Wed3 from "@/assets/banquet/kings_court/webp/kingsHall11.webp";
import Wed4 from "@/assets/banquet/kings_court/webp/kingsHall12.webp";
import Wed5 from "@/assets/banquet/kings_court/webp/kingsHall13.webp";
import Wed6 from "@/assets/banquet/kings_court/webp/kingsHall14.webp";
import Wed7 from "@/assets/banquet/kings_court/webp/kingsHall15.webp";
import Wed8 from "@/assets/banquet/kings_court/webp/kingsHall16.webp";
import Wed9 from "@/assets/banquet/kings_court/webp/kingsHall17.webp";
import Wed10 from "@/assets/banquet/kings_court/webp/kingsHall18.webp";
import Wed11 from "@/assets/banquet/kings_court/webp/kingsHall19.webp";
import Wed12 from "@/assets/banquet/kings_court/webp/kingsHall20.webp";
import Wed13 from "@/assets/banquet/kings_court/webp/kingsHall4.webp";
import Wed14 from "@/assets/gallery/weddings/webp/wedding1.webp";
import Wed15 from "@/assets/gallery/weddings/webp/wedding2.webp";
import Wed16 from "@/assets/gallery/weddings/webp/wedding3.webp";
import Wed17 from "@/assets/banquet/kings_court/webp/kingsHall3.webp";
import Wed18 from "@/assets/gallery/weddings/webp/wedding4.webp";
import Wed19 from "@/assets/gallery/weddings/webp/wedding5.webp";
import Wed20 from "@/assets/gallery/weddings/webp/wedding6.webp";
import Wed21 from "@/assets/gallery/weddings/webp/wedding7.webp";
import Wed22 from "@/assets/gallery/weddings/webp/wedding8.webp";
import Wed23 from "@/assets/gallery/weddings/webp/wedding9.webp";
import Wed24 from "@/assets/gallery/weddings/webp/wedding10.webp";
import Wed25 from "@/assets/gallery/weddings/webp/wedding11.webp";
import Wed26 from "@/assets/gallery/weddings/webp/wedding12.webp";
import Wed27 from "@/assets/gallery/weddings/webp/wedding13.webp";
import Wed28 from "@/assets/gallery/weddings/webp/wedding14.webp";
import Wed29 from "@/assets/gallery/weddings/webp/wedding15.webp";
import Wed30 from "@/assets/gallery/weddings/webp/wedding16.webp";
import Wed31 from "@/assets/gallery/weddings/webp/wedding17.webp";
import Wed32 from "@/assets/gallery/weddings/webp/wedding18.webp";
import Wed33 from "@/assets/gallery/weddings/webp/wedding19.webp";
import Wed34 from "@/assets/gallery/weddings/webp/wedding20.webp";
import Wed35 from "@/assets/gallery/weddings/webp/wedding21.webp";
import Wed36 from "@/assets/gallery/weddings/webp/wedding22.webp";
import Wed37 from "@/assets/gallery/weddings/webp/wedding23.webp";
import Wed38 from "@/assets/gallery/weddings/webp/wedding24.webp";
import Wed39 from "@/assets/gallery/weddings/webp/wedding25.webp";
import Wed40 from "@/assets/gallery/weddings/webp/wedding26.webp";
import Wed41 from "@/assets/gallery/weddings/webp/wedding27.webp";
import Wed42 from "@/assets/gallery/weddings/webp/wedding28.webp";
import Wed43 from "@/assets/gallery/weddings/webp/wedding29.webp";
import Wed44 from "@/assets/gallery/weddings/webp/wedding30.webp";
import Wed45 from "@/assets/gallery/weddings/webp/wedding31.webp";
import Wed46 from "@/assets/banquet/royal_banquet/webp/royalHall53.webp";
import Wed47 from "@/assets/banquet/royal_banquet/webp/royalHall54.webp";
import Wed48 from "@/assets/banquet/royal_banquet/webp/royalHall57.webp";
import Wed49 from "@/assets/banquet/royal_banquet/webp/royalHall58.webp";
import Wed50 from "@/assets/banquet/royal_banquet/webp/royalHall59.webp";
import Wed51 from "@/assets/banquet/royal_banquet/webp/royalHall60.webp";
import Wed52 from "@/assets/banquet/royal_banquet/webp/royalHall61.webp";
import Wed53 from "@/assets/banquet/royal_banquet/webp/royalHall62.webp";
import Wed54 from "@/assets/banquet/royal_banquet/webp/royalHall63.webp";
import Wed55 from "@/assets/banquet/royal_banquet/webp/royalHall65.webp";
import Wed56 from "@/assets/banquet/royal_banquet/webp/royalHall69.webp";
import Wed57 from "@/assets/banquet/royal_banquet/webp/royalHall72.webp";
import Wed58 from "@/assets/banquet/royal_banquet/webp/royalHall77.webp";
import Wed59 from "@/assets/banquet/royal_banquet/webp/royalHall79.webp";
import Wed60 from "@/assets/banquet/royal_banquet/webp/royalHall81.webp";
import Wed61 from "@/assets/banquet/royal_banquet/webp/royalHall91.webp";

const categories = ["ALL", "WEDDINGS", "DINING", "ACCOMMODATION"];

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
    { src: Wed1, category: "WEDDINGS" },
    { src: Wed2, category: "WEDDINGS" },
    { src: Wed3, category: "WEDDINGS" },
    { src: Wed4, category: "WEDDINGS" },
    { src: Wed5, category: "WEDDINGS" },
    { src: Wed6, category: "WEDDINGS" },
    { src: Wed7, category: "WEDDINGS" },
    { src: Wed8, category: "WEDDINGS" },
    { src: Wed9, category: "WEDDINGS" },
    { src: Wed10, category: "WEDDINGS" },
    { src: Wed11, category: "WEDDINGS" },
    { src: Wed12, category: "WEDDINGS" },
    { src: Wed13, category: "WEDDINGS" },
    { src: Wed14, category: "WEDDINGS" },
    { src: Wed15, category: "WEDDINGS" },
    { src: Wed16, category: "WEDDINGS" },
    { src: Wed17, category: "WEDDINGS" },
    { src: Wed18, category: "WEDDINGS" },
    { src: Wed19, category: "WEDDINGS" },
    { src: Wed20, category: "WEDDINGS" },
    { src: Wed21, category: "WEDDINGS" },
    { src: Wed22, category: "WEDDINGS" },
    { src: Wed23, category: "WEDDINGS" },
    { src: Wed24, category: "WEDDINGS" },
    { src: Wed25, category: "WEDDINGS" },
    { src: Wed26, category: "WEDDINGS" },
    { src: Wed27, category: "WEDDINGS" },
    { src: Wed28, category: "WEDDINGS" },
    { src: Wed29, category: "WEDDINGS" },
    { src: Wed30, category: "WEDDINGS" },
    { src: Wed31, category: "WEDDINGS" },
    { src: Wed32, category: "WEDDINGS" },
    { src: Wed33, category: "WEDDINGS" },
    { src: Wed34, category: "WEDDINGS" },
    { src: Wed35, category: "WEDDINGS" },
    { src: Wed36, category: "WEDDINGS" },
    { src: Wed37, category: "WEDDINGS" },
    { src: Wed38, category: "WEDDINGS" },
    { src: Wed39, category: "WEDDINGS" },
    { src: Wed40, category: "WEDDINGS" },
    { src: Wed41, category: "WEDDINGS" },
    { src: Wed42, category: "WEDDINGS" },
    { src: Wed43, category: "WEDDINGS" },
    { src: Wed44, category: "WEDDINGS" },
    { src: Wed45, category: "WEDDINGS" },
    { src: Wed46, category: "WEDDINGS" },
    { src: Wed47, category: "WEDDINGS" },
    { src: Wed48, category: "WEDDINGS" },
    { src: Wed49, category: "WEDDINGS" },
    { src: Wed50, category: "WEDDINGS" },
    { src: Wed51, category: "WEDDINGS" },
    { src: Wed52, category: "WEDDINGS" },
    { src: Wed53, category: "WEDDINGS" },
    { src: Wed54, category: "WEDDINGS" },
    { src: Wed55, category: "WEDDINGS" },
    { src: Wed56, category: "WEDDINGS" },
    { src: Wed57, category: "WEDDINGS" },
    { src: Wed58, category: "WEDDINGS" },
    { src: Wed59, category: "WEDDINGS" },
    { src: Wed60, category: "WEDDINGS" },
    { src: Wed61, category: "WEDDINGS" },
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
