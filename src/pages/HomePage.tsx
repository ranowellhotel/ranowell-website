import React from "react";

// Components
import Header from "@/components/Header";
import OffersSection from "@/components/HomePage/OffersSection";
import StoriesSection from "@/components/HomePage/StoriesSection";
import AboutSection from "@/components/HomePage/AboutSection";
import SocialsSection from "@/components/HomePage/SocialsSection";

// IMAGES — Replace these with your real assets
import HeaderImg from "@/assets/headerHome.png";

import BuffetImg from "@/assets/offers/buffet2.png";
import ReceptionImg from "@/assets/offers/reception2.png";
import RoomImg from "@/assets/offers/room2.png";

import Story1 from "@/assets/stories/story1.png";
import Story2 from "@/assets/stories/story2.png";
import Story3 from "@/assets/stories/story3.png";
import Story4 from "@/assets/stories/story4.png";
import Story5 from "@/assets/stories/story5.png";
import Story6 from "@/assets/stories/story6.png";

import About1 from "@/assets/about/about1.png";
import About2 from "@/assets/about/about2.png";
import About3 from "@/assets/about/about3.png";
import About4 from "@/assets/about/about4.png";

import Social1 from "@/assets/socials/social1.png";
import Social2 from "@/assets/socials/social1.png";
import Social3 from "@/assets/socials/social1.png";
import Social4 from "@/assets/socials/social1.png";
import Social5 from "@/assets/socials/social1.png";
import Social6 from "@/assets/socials/social1.png";
import Social7 from "@/assets/socials/social1.png";
import Social8 from "@/assets/socials/social1.png";

const HomePage: React.FC = () => {
    return (
        <>
            {/* ---------------- HEADER ---------------- */}
            <Header
                image={HeaderImg}
                subtitle="WELCOME TO RANOWELL HOTELS"
                title="Experience Refined Hospitality Inspired by Sri Lankan Elegance"
                overlayColor="bg-transparent"
                overlayOpacity="bg-opacity-40"
            />

            {/* ---------------- OFFERS SECTION ---------------- */}
            <OffersSection
                items={[
                    { image: BuffetImg, title: "Wedding Buffets" },
                    { image: ReceptionImg, title: "Reception Halls" },
                    { image: RoomImg, title: "Hotel Rooms" },
                    { image: ReceptionImg, title: "Reception Halls" },
                    { image: BuffetImg, title: "Wedding Buffets" },
                    { image: RoomImg, title: "Hotel Rooms" },
                ]}
            />

            {/* ---------------- STORIES SECTION ---------------- */}
            <StoriesSection
                items={[
                    {
                        image: Story1,
                        quote:
                            "Our stay at Ocean Pearl Hotel was nothing short of amazing! The staff were incredibly warm and helpful, and the breakfast buffet with local Sri Lankan dishes like hoppers and kiribath was a highlight. Can’t wait to return!",
                        author: "Emma & Jack",
                        location: "United Kingdom",
                        bgColor: "#F0E1FA",

                    },
                    {
                        image: Story2,
                        quote:
                            "Our stay at Ocean Pearl Hotel was nothing short of amazing! The staff were incredibly warm and helpful, and the breakfast buffet with local Sri Lankan dishes like hoppers and kiribath was a highlight. Can’t wait to return!",
                        author: "Emma & Jack",
                        location: "United Kingdom",
                        bgColor: "#FFFFFF",
                    },
                    {
                        image: Story3,
                        quote:
                            "Our stay at Ocean Pearl Hotel was nothing short of amazing! The staff were incredibly warm and helpful, and the breakfast buffet with local Sri Lankan dishes like hoppers and kiribath was a highlight. Can’t wait to return!",
                        author: "Emma & Jack",
                        location: "United Kingdom",
                        bgColor: "#F0E1FA",
                    },
                    {
                        image: Story4,
                        quote:
                            "Our stay at Ocean Pearl Hotel was nothing short of amazing! The staff were incredibly warm and helpful, and the breakfast buffet with local Sri Lankan dishes like hoppers and kiribath was a highlight. Can’t wait to return!",
                        author: "Emma & Jack",
                        location: "United Kingdom",
                        bgColor: "#FFFFFF",
                    },
                    {
                        image: Story5,
                        quote:
                            "Our stay at Ocean Pearl Hotel was nothing short of amazing! The staff were incredibly warm and helpful, and the breakfast buffet with local Sri Lankan dishes like hoppers and kiribath was a highlight. Can’t wait to return!",
                        author: "Emma & Jack",
                        location: "United Kingdom",
                        bgColor: "#F0E1FA",
                    },
                    {
                        image: Story6,
                        quote:
                            "Our stay at Ocean Pearl Hotel was nothing short of amazing! The staff were incredibly warm and helpful, and the breakfast buffet with local Sri Lankan dishes like hoppers and kiribath was a highlight. Can’t wait to return!",
                        author: "Emma & Jack",
                        location: "United Kingdom",
                        bgColor: "#FFFFFF",
                    },
                ]}
            />

            {/* ---------------- ABOUT SECTION ---------------- */}
            <AboutSection
                faqs={[
                    { question: "How can I place an order for delivery?", answer: "You can call our hotline or place orders online." },
                    { question: "Do you offer airport pickup?", answer: "Yes, airport pickup can be arranged on request." },
                    { question: "Are pets allowed at Ranowell?", answer: "Pets are allowed only in designated outdoor spaces." },
                    { question: "How many restaurants do you have?", answer: "We have 3 restaurants and 2 bars." },
                    { question: "Is the hotel child friendly?", answer: "Yes, we have family-friendly amenities and services." },
                ]}
                images={[About1, About2, About3, About4]}
            />

            {/* ---------------- SOCIALS SECTION ---------------- */}
            <SocialsSection
                items={[
                    { image: Social1, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social2, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social3, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social4, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social5, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social6, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social7, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                    { image: Social8, link: "https://www.facebook.com/share/p/1DP3YzMZxX/" },
                ]}
            />

        </>
    );
};

export default HomePage;
