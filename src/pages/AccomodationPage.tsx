
// Components
import Header from "@/components/Header";
import NavigationSection from "@/components/AccomodationPage/NavigationSection";
import AccommodationTypeSection from "@/components/AccomodationPage/AccommodationTypeSection";
import AccommodationOffersSection from "@/components/AccomodationPage/AccommodationOffersSection";

// Images
import HeaderImg from "@/assets/accommodationheader.png";
import DoubleRoomImg from "@/assets/accommodation/double.png";
import TripleRoomImg from "@/assets/accommodation/triple.png";
import FamilyRoomImg from "@/assets/accommodation/family.png";
import WeddingRoomImg from "@/assets/accommodation/wedding.png";

import SpaImg from "@/assets/accommodation/spa.png";
import LocalImg from "@/assets/accommodation/local.png";
import BookEarlyImg from "@/assets/accommodation/book-early.png";

const AccommodationPage = () => {
    return (
        <div className="w-full">

            {/* HEADER */}
            <Header
                image={HeaderImg}
                title="Unwind in Stylish Comfort with Thoughtfully Designed Rooms & Suites"
                subtitle="ACCOMMODATIONS AT RANOWELL"
                overlayColor="bg-tranparent"
                overlayOpacity="bg-opacity-40"
            />

            {/* NAVIGATION */}
            <NavigationSection
                description={`Each of our rooms and suites will have you waking up early to enjoy the sound of birdsong,
                tranquil surroundings, and panoramic hill country views. Enjoy well-appointed rooms blending
                colonial charm with contemporary comforts for a serene retreat.`}
                title="ACCOMMODATION"
                items={[
                    { label: "Deluxe Double Room" },
                    { label: "Deluxe Triple Room" },
                    { label: "Deluxe Family Room" },
                    { label: "Wedding Dressing Room" },
                ]}
            />

            {/* ROOM TYPE SECTION */}
            <AccommodationTypeSection
                items={[
                    {
                        image: DoubleRoomImg,
                        title: "Deluxe Double Room",
                        description:
                            "Beautiful rooms with king-sized beds and contemporary amenities, offering stunning views of the plantation.",
                        size: "275 Sq Ft",
                        bed: "King Bed",
                        occupancy: "2 Adults",
                        buttonLink: "#",
                    },
                    {
                        image: TripleRoomImg,
                        title: "Deluxe Triple Room",
                        description:
                            "Comfortable triple rooms with modern décor, offering a relaxing atmosphere for families.",
                        size: "275 Sq Ft",
                        bed: "Triple Bed",
                        occupancy: "3 Guests",
                        buttonLink: "#",
                    },
                    {
                        image: FamilyRoomImg,
                        title: "Deluxe Family Room",
                        description:
                            "Beautiful family rooms with king-sized beds, modern décor, and panoramic views — ideal for a romantic retreat.",
                        size: "350 Sq Ft",
                        bed: "King Bed",
                        occupancy: "4 Guests",
                        buttonLink: "#",
                    },
                    {
                        image: WeddingRoomImg,
                        title: "Wedding Dressing Room",
                        description:
                            "Beautiful rooms with luxury amenities — ideal for wedding preparations.",
                        size: "275 Sq Ft",
                        bed: "Queen Bed",
                        occupancy: "2 Adults",
                        buttonLink: "#",
                    },
                ]}
            />

            {/* OFFERS SECTION */}
            <AccommodationOffersSection
                heading="EXCLUSIVE OFFERS"
                subHeading="For An Exclusive Stay"
                description={`Reserve your special day with us and indulge in a celebration crafted with elegance.
                From exquisite décor to flawless service, our bespoke packages are designed to transform your stay into a memorable experience.`}
                offers={[
                    { image: SpaImg, title: "Spa Treatment", subtitle: "Offer" },
                    { image: LocalImg, title: "Local Getaway", subtitle: "Offer" },
                    { image: BookEarlyImg, title: "Book Early", subtitle: "Offer" },
                ]}
            />

        </div>
    );
};

export default AccommodationPage;
