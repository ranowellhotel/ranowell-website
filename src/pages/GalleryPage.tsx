import React, { useState } from "react";
import Header from "@/components/Header";

// Dummy images — replace with real assets
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

// Dummy data — each image belongs to a category
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

    // Filter logic
    const filteredImages =
        activeCategory === "ALL"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    return (
        <div className="w-full">

            {/* ----------------------- */}
            {/* HEADER SECTION */}
            {/* ----------------------- */}
            <Header
                image={GalleryHeaderImg} // Replace with gallery header image
                title="Explore Moments of Beauty Captured in Every Detail"
                subtitle="RANOWELL GALLERY"
                overlayColor="rgba(0,0,0,0.35)"
            />

            {/* ----------------------- */}
            {/* PAGE TITLE */}
            {/* ----------------------- */}
            <div className="text-center mt-10">
                <h2 className="text-[22px] tracking-widest text-purple-700 font-medium">
                    GALLERY
                </h2>
            </div>

            {/* ----------------------- */}
            {/* CATEGORY NAVIGATION */}
            {/* ----------------------- */}
            <div className="flex justify-center gap-10 mt-6 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm tracking-widest uppercase ${
                            activeCategory === cat
                                ? "font-semibold text-purple-700"
                                : "text-gray-500 hover:text-black"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* ----------------------- */}
            {/* GALLERY GRID */}
            {/* ----------------------- */}
            <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filteredImages.map((item, index) => (
                    <div key={index} className="w-full">
                        <img
                            src={item.src}
                            alt="Gallery"
                            className="w-full h-[300px] object-cover rounded shadow-sm"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
