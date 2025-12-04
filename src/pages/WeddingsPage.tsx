import React from "react";

// Components
import Header from "@/components/Header";
import VideoSection from "@/components/WeddingPage/VideoSection";
import WeddingsSection from "@/components/WeddingPage/WeddingsSection";
import BanquetSection from "@/components/WeddingPage/BanquetSection";

// IMAGES / VIDEOS — Replace with your actual files
import WeddingsHeaderImg from "@/assets/weddingheader.png";
import WeddingVideo from "@/assets/videos/wedding.mp4";

import Couple1 from "@/assets/weddings/couple1.png";
import Couple2 from "@/assets/weddings/couple2.png";
import Couple3 from "@/assets/weddings/couple3.png";

import BanquetHeaderImg from "@/assets/banquetheader.png";

import RoyalBanquetImg from "@/assets/banquet/royal.png";
import KingsCourtImg from "@/assets/banquet/kings.png";
import SparkleLoungeImg from "@/assets/banquet/sparkle.png";

const WeddingsPage: React.FC = () => {
    return (
        <>
            {/* ---------------- HEADER SECTION (WEDDINGS HERO) ---------------- */}
            <Header
                image={WeddingsHeaderImg}
                subtitle="RANOWELL WEDDINGS"
                title="Celebrate Timeless Romance with Exquisite Wedding Experiences"
                overlayColor="bg-transparent"
                overlayOpacity="bg-opacity-40"
            />

            {/* ---------------- VIDEO SECTION ---------------- */}
            <VideoSection
                label="RANOWELL"
                title="Timeless Moments, Coastal Charm – Weddings in Negombo, Sri Lanka"
                description="Celebrate your special day in style at Ranowell Hotel, where every detail is crafted to perfection. Our elegant venues, exceptional service, and personalized wedding packages ensure a truly unforgettable experience. Let us bring your dream wedding to life with customized décor, exquisite catering, and seamless planning, all set against the beautiful backdrop of Rathnapura."
                videoSrc={WeddingVideo}
            />

            {/* ---------------- WEDDINGS SECTION (COUPLES) ---------------- */}
            <WeddingsSection
                title="Secure Your Dream Wedding at Ranowell Hotel!"
                description="Reserve your special day with us and indulge in a celebration crafted with elegance. From exquisite décor to flawless service, our bespoke wedding packages are designed to transform your dream day into a timeless memory. Let us bring sophistication and romance to every moment."
                items={[
                    { image: Couple1, coupleNames: "Nipun & Ayesha" },
                    { image: Couple2, coupleNames: "Christeen & Pramodh" },
                    { image: Couple3, coupleNames: "Maleesha & Marlon" },
                ]}
                buttonLink="https://pixieset.com" // replace with real link
            />

            {/* ---------------- HEADER SECTION (BANQUET HERO) ---------------- */}
            <Header
                image={BanquetHeaderImg}
                subtitle="RANOWELL BANQUET HALLS"
                title="Discover Elegant Banquet Halls Designed for Grand Celebrations"
                overlayColor="bg-tranparent"
                overlayOpacity="bg-opacity-40"
                height="h-[80vh]"
            />

            {/* ---------------- BANQUET SECTION ---------------- */}
            <BanquetSection
                items={[
                    {
                        title: "Royal Banquet",
                        description:
                            "Discover exclusive offers designed to enhance your stay with special in-room amenities, complementary upgrades on availability, spa discounts and more. Choose from romantic getaways to extended vacations, at Heritance Hotels and Resorts.",
                        image: RoyalBanquetImg,
                        buttonLink: "#",
                    },
                    {
                        title: "Kings Court",
                        description:
                            "Discover exclusive offers designed to enhance your stay with special in-room amenities, complementary upgrades on availability, spa discounts and more. Choose from romantic getaways to extended vacations at Heritance Hotels and Resorts.",
                        image: KingsCourtImg,
                        buttonLink: "#",
                    },
                    {
                        title: "Sparkle Lounge",
                        description:
                            "Discover exclusive offers designed to enhance your stay with special in-room amenities, complementary upgrades on availability, spa discounts and more. Choose from romantic getaways to extended vacations at Heritance Hotels and Resorts.",
                        image: SparkleLoungeImg,
                        buttonLink: "#",
                    },
                ]}
            />
        </>
    );
};

export default WeddingsPage;
