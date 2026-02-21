import React from "react";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "@/components/ImageWithLoader";

// Images
import Img from "@/assets/banquet/royal_banquet/royalHall1.jpg";
import Img1 from "@/assets/banquet/royal_banquet/royalHall2.jpg";
import Img2 from "@/assets/banquet/royal_banquet/royalHall3.jpg";
import Img3 from "@/assets/banquet/royal_banquet/royalHall4.jpg";
import Img4 from "@/assets/banquet/royal_banquet/royalHall5.jpg";
import Img5 from "@/assets/banquet/royal_banquet/royalHall6.jpg";
import Img6 from "@/assets/banquet/royal_banquet/royalHall7.jpg";
import Img7 from "@/assets/banquet/royal_banquet/royalHall8.jpg";
import Img8 from "@/assets/banquet/royal_banquet/royalHall9.jpg";
import Img9 from "@/assets/banquet/royal_banquet/royalHall10.jpg";
import Img10 from "@/assets/banquet/royal_banquet/royalHall11.jpg";
import Img11 from "@/assets/banquet/royal_banquet/royalHall12.jpg";
import Img12 from "@/assets/banquet/royal_banquet/royalHall13.jpg";
import Img13 from "@/assets/banquet/royal_banquet/royalHall14.jpg";
import Img14 from "@/assets/banquet/royal_banquet/royalHall15.jpg";
import Img15 from "@/assets/banquet/royal_banquet/royalHall16.jpg";
import Img16 from "@/assets/banquet/royal_banquet/royalHall17.jpg";
import Img17 from "@/assets/banquet/royal_banquet/royalHall18.jpg";
import Img18 from "@/assets/banquet/royal_banquet/royalHall19.jpg";
import Img19 from "@/assets/banquet/royal_banquet/royalHall20.jpg";
import Img20 from "@/assets/banquet/royal_banquet/royalHall21.jpg";
import Img21 from "@/assets/banquet/royal_banquet/royalHall22.jpg";
import Img22 from "@/assets/banquet/royal_banquet/royalHall23.jpg";
import Img23 from "@/assets/banquet/royal_banquet/royalHall24.jpg";
import Img24 from "@/assets/banquet/royal_banquet/royalHall25.jpg";
import Img25 from "@/assets/banquet/royal_banquet/royalHall26.jpg";
import Img26 from "@/assets/banquet/royal_banquet/royalHall27.jpg";
import Img27 from "@/assets/banquet/royal_banquet/royalHall28.jpg";
import Img28 from "@/assets/banquet/royal_banquet/royalHall29.jpg";
import Img29 from "@/assets/banquet/royal_banquet/royalHall30.jpg";
import Img30 from "@/assets/banquet/royal_banquet/royalHall31.jpg";
import Img31 from "@/assets/banquet/royal_banquet/royalHall32.jpg";
import Img32 from "@/assets/banquet/royal_banquet/royalHall33.jpg";
import Img33 from "@/assets/banquet/royal_banquet/royalHall34.jpg";
import Img34 from "@/assets/banquet/royal_banquet/royalHall35.jpg";
import Img35 from "@/assets/banquet/royal_banquet/royalHall36.jpeg";
import Img36 from "@/assets/banquet/royal_banquet/royalHall37.jpeg";
import Img37 from "@/assets/banquet/royal_banquet/royalHall38.jpg";
import Img38 from "@/assets/banquet/royal_banquet/royalHall39.jpg";

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
