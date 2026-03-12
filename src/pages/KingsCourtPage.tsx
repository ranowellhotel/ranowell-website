import React from "react";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import Img1 from "@/assets/banquet/kings_court/webp/kingsHall1.webp";
import Img2 from "@/assets/banquet/kings_court/webp/kingsHall2.webp";
import Img3 from "@/assets/banquet/kings_court/webp/kingsHall3.webp";
import Img4 from "@/assets/banquet/kings_court/webp/kingsHall4.webp";
import Img5 from "@/assets/banquet/kings_court/webp/kingsHall5.webp";
import Img6 from "@/assets/banquet/kings_court/webp/kingsHall6.webp";
import Img7 from "@/assets/banquet/kings_court/webp/kingsHall7.webp";
import Img8 from "@/assets/banquet/kings_court/webp/kingsHall8.webp";

// Image list
const images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8
];

const KingsCourtPage: React.FC = () => {
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
                    Kings Court
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
                            alt={`Kings Court ${index + 1}`}
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

export default KingsCourtPage;
