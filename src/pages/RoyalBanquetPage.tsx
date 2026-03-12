import React from "react";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import Img from "@/assets/banquet/royal_banquet/webp/royalHall1.webp";
import Img1 from "@/assets/banquet/royal_banquet/webp/royalHall2.webp";
import Img2 from "@/assets/banquet/royal_banquet/webp/royalHall3.webp";
import Img3 from "@/assets/banquet/royal_banquet/webp/royalHall4.webp";
import Img4 from "@/assets/banquet/royal_banquet/webp/royalHall5.webp";
import Img5 from "@/assets/banquet/royal_banquet/webp/royalHall6.webp";
import Img6 from "@/assets/banquet/royal_banquet/webp/royalHall7.webp";
import Img7 from "@/assets/banquet/royal_banquet/webp/royalHall8.webp";
import Img8 from "@/assets/banquet/royal_banquet/webp/royalHall9.webp";
import Img9 from "@/assets/banquet/royal_banquet/webp/royalHall10.webp";
import Img10 from "@/assets/banquet/royal_banquet/webp/royalHall11.webp";
import Img11 from "@/assets/banquet/royal_banquet/webp/royalHall12.webp";
import Img12 from "@/assets/banquet/royal_banquet/webp/royalHall13.webp";
import Img13 from "@/assets/banquet/royal_banquet/webp/royalHall14.webp";
import Img14 from "@/assets/banquet/royal_banquet/webp/royalHall15.webp";
import Img15 from "@/assets/banquet/royal_banquet/webp/royalHall16.webp";
import Img16 from "@/assets/banquet/royal_banquet/webp/royalHall17.webp";
import Img17 from "@/assets/banquet/royal_banquet/webp/royalHall18.webp";
import Img18 from "@/assets/banquet/royal_banquet/webp/royalHall19.webp";
import Img19 from "@/assets/banquet/royal_banquet/webp/royalHall20.webp";
import Img20 from "@/assets/banquet/royal_banquet/webp/royalHall21.webp";
import Img21 from "@/assets/banquet/royal_banquet/webp/royalHall22.webp";
import Img22 from "@/assets/banquet/royal_banquet/webp/royalHall23.webp";
import Img23 from "@/assets/banquet/royal_banquet/webp/royalHall24.webp";
import Img24 from "@/assets/banquet/royal_banquet/webp/royalHall25.webp";
import Img25 from "@/assets/banquet/royal_banquet/webp/royalHall26.webp";
import Img26 from "@/assets/banquet/royal_banquet/webp/royalHall27.webp";
import Img27 from "@/assets/banquet/royal_banquet/webp/royalHall28.webp";
import Img28 from "@/assets/banquet/royal_banquet/webp/royalHall29.webp";
import Img29 from "@/assets/banquet/royal_banquet/webp/royalHall30.webp";
import Img30 from "@/assets/banquet/royal_banquet/webp/royalHall31.webp";
import Img31 from "@/assets/banquet/royal_banquet/webp/royalHall32.webp";
import Img32 from "@/assets/banquet/royal_banquet/webp/royalHall33.webp";
import Img33 from "@/assets/banquet/royal_banquet/webp/royalHall34.webp";
import Img34 from "@/assets/banquet/royal_banquet/webp/royalHall35.webp";
import Img35 from "@/assets/banquet/royal_banquet/webp/royalHall36.webp";
import Img36 from "@/assets/banquet/royal_banquet/webp/royalHall37.webp";
import Img37 from "@/assets/banquet/royal_banquet/webp/royalHall38.webp";
import Img38 from "@/assets/banquet/royal_banquet/webp/royalHall39.webp";

// Image list
const images = [
    Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
    Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19,
    Img20, Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28, Img29,
    Img30, Img31, Img32, Img33, Img34, Img35, Img36, Img37, Img38
];

const RoyalBanquetPage: React.FC = () => {
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
                <h2 className="text-[22px] tracking-widest font-marcellus text-xl md:text-3xl text-purple-700 font-medium">
                    Royal Banquet
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
                            alt={`Royal Banquet ${index + 1}`}
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

export default RoyalBanquetPage;
