import React from "react";

// Components
import Header from "@/components/Header";
import OffersSection from "@/components/HomePage/OffersSection";
import StoriesSection from "@/components/HomePage/StoriesSection";
import AboutSection from "@/components/HomePage/AboutSection";
import SocialsSection from "@/components/HomePage/SocialsSection";

// IMAGES — Replace these with your real assets
// import HeaderImg from "@/assets/headerHome.png";
import HeaderVideo from "@/assets/videos/ranowell_hero_vid_2.mp4";


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

import Social2 from "@/assets/socials/s2.jpg";
import Social3 from "@/assets/socials/s3.png";
import Social4 from "@/assets/socials/s4.png";
import Social5 from "@/assets/socials/s5.png";
import Social6 from "@/assets/socials/s6.png";
import Social7 from "@/assets/socials/s7.png";
import Social8 from "@/assets/socials/s8.png";
import Social9 from "@/assets/socials/s9.png";


const HomePage: React.FC = () => {
    return (
        <>
            {/* ---------------- HEADER ---------------- */}
            <Header
                videoSrc={HeaderVideo}
                // subtitle="WELCOME TO RANOWELL HOTELS"
                // title="Experience Refined Hospitality Inspired by Sri Lankan Elegance"
                overlayColor="bg-transparent"
                overlayOpacity="bg-opacity-40"
                // height="h-[120vh]"
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
                            "We chose Ranowell for our homecoming wedding and the service was impeccable. Every detail was handled with care, allowing us to truly enjoy our special day with family and friends in a beautiful, elegant setting.",
                        author: "Alex Lakshan",
                        location: "Sri Lanka",
                        bgColor: "#F0E1FA",
                    },
                    {
                        image: Story2,
                        quote:
                            "From our first visit until the end of our wedding, the staff were incredibly supportive and kind. The food was outstanding and received many compliments. Special thanks for the smooth coordination that made our day stress-free.",
                        author: "Milruwan & Ranitha",
                        location: "Sri Lanka",
                        bgColor: "#FFFFFF",
                    },
                    {
                        image: Story3,
                        quote:
                            "The service was truly exceptional and highly professional from start to finish. Every requirement was personally taken care of, making the entire experience seamless and reassuring.",
                        author: "Harindi Devagiri",
                        location: "Sri Lanka",
                        bgColor: "#F0E1FA",
                    },
                    {
                        image: Story4,
                        quote:
                            "Our wedding at Ranowell was unforgettable. The team’s attention to detail, warm hospitality, and excellent coordination made our special day truly memorable.",
                        author: "Inush Gayasara",
                        location: "Sri Lanka",
                        bgColor: "#FFFFFF",
                    },
                    {
                        image: Story5,
                        quote:
                            "From delicious food to friendly and helpful staff, everything was perfect. Even last-minute room arrangements were handled effortlessly. We couldn’t have asked for a better wedding experience.",
                        author: "Rehan Dias",
                        location: "Sri Lanka",
                        bgColor: "#F0E1FA",
                    },
                    {
                        image: Story6,
                        quote:
                            "Choosing Ranowell Hotel was one of the best decisions we made. The team was extremely organized, attentive, and ensured every detail was perfectly aligned with our plans.",
                        author: "Aaqib Naffan",
                        location: "Sri Lanka",
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
                    {
                        image: Social2,
                        postUrl: "https://www.facebook.com/share/p/17S96fzrq8/",
                    },
                    {
                        image: Social3,
                        postUrl: "https://www.facebook.com/ranowellhotels/posts/654321",
                    },
                    {
                        image: Social4,
                        postUrl: "https://www.facebook.com/share/r/1AZVv1dZvm/",
                    },
                    {
                        image: Social5,
                        postUrl: "https://www.facebook.com/share/p/17CfSxWxXe/",
                    },
                    {
                        image: Social6,
                        postUrl: "https://www.facebook.com/share/p/1DKqXX1eZe/",
                    },
                    {
                        image: Social7,
                        postUrl: "https://www.facebook.com/share/p/1N7K4B2EFe/",
                    },
                    {
                        image: Social8,
                        postUrl: "https://www.facebook.com/share/p/19yjkr36xh/",
                    },
                    {
                        image: Social9,
                        postUrl: "https://www.facebook.com/share/p/1DTXUy1Gxv/",
                    }
                ]}
            />

        </>
    );
};

export default HomePage;
