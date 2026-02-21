import React from "react";

// Components
import Header from "@/components/Header";
import OffersSection from "@/components/HomePage/OffersSection";
import StoriesSection from "@/components/HomePage/StoriesSection";
import AboutSection from "@/components/HomePage/AboutSection";
import SocialsSection from "@/components/HomePage/SocialsSection";

// Data
import { OFFERS_DATA, STORIES_DATA, ABOUT_FAQS, ABOUT_IMAGES, SOCIALS_DATA } from "@/constants";

// IMAGES
import HeaderVideo from "@/assets/videos/ranowell_hero_vid_2.mp4";

const HomePage: React.FC = () => {
    return (
        <>
            {/* ---------------- HEADER ---------------- */}
            <Header
                videoSrc={HeaderVideo}
                overlayColor="bg-transparent"
                overlayOpacity="bg-opacity-40"
            />

            {/* ---------------- OFFERS SECTION ---------------- */}
            <OffersSection items={OFFERS_DATA} />

            {/* ---------------- STORIES SECTION ---------------- */}
            <StoriesSection items={STORIES_DATA} />

            {/* ---------------- ABOUT SECTION ---------------- */}
            <AboutSection
                faqs={ABOUT_FAQS}
                images={ABOUT_IMAGES}
            />

            {/* ---------------- SOCIALS SECTION ---------------- */}
            <SocialsSection items={SOCIALS_DATA} />

        </>
    );
};

export default HomePage;
