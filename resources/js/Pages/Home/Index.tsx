import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import HomeHeroSection from "./partials/HomeHeroSection";
import MostRecommendedSection from "./partials/MostRecommendedSection";
import ImageWallGallery from "./partials/ImageWallGallery";







export default function Home(
    {
        // heroData,

    }: {
            // heroData: any
        }) {

    const heroData = [
        {
            id: 1,
            sub_title: "Elegant Blazer Rentals",
            title: "Find Your Perfect Fit",
            intro: "Discover our premium collection of blazers, perfect for weddings, business events, and formal occasions. Our stylish, well-fitted blazers ensure you look sharp and feel confident. With a range of modern and classic styles available, finding the right fit for any event has never been easier or more affordable.",
            image_url: "assets/images/hero1.png",
            mobile_image_url: "assets/images/hero1.png",
            link: "#"
        },
        {
            id: 2,
            sub_title: "Stunning Wedding Dresses",
            title: "Dress to Impress",
            intro: "Step into elegance with our exquisite range of wedding gowns, designed to make you feel beautiful and confident on your big day. We offer a variety of styles, from timeless classics to modern silhouettes, ensuring every bride finds the perfect dress to match her vision and personality.",
            image_url: "assets/images/hero2.png",
            mobile_image_url: "assets/images/hero2.png",
            link: "#"
        },
        {
            id: 3,
            sub_title: "Luxury Wedding Car Rentals",
            title: "Arrive in Style",
            intro: "Make a lasting impression with our beautifully decorated wedding cars, featuring top models like Toyota Camry, C-HR, and Rosa Bus. Ideal for weddings and special occasions, our car rental service offers elegance, comfort, and unforgettable charm. Let your journey begin with style, class, and a touch of celebration.",
            image_url: "assets/images/hero3.png",
            mobile_image_url: "assets/images/hero3.png",
            link: "#"
        }
    ];

    const sampleImages = [
        "https://i.pinimg.com/236x/71/31/ca/7131caf315dfaf6e8bfbb7f08082b11b.jpg",
        "https://i.pinimg.com/236x/0e/1f/96/0e1f96cd500bb63b770069397117d721.jpg",
        "https://i.pinimg.com/236x/cb/6d/3e/cb6d3eab345e6d6fa2493734fc345979.jpg",
        "https://i.pinimg.com/236x/b2/4d/a7/b24da74008c9471141ff99044e4e3861.jpg",
        "https://i.pinimg.com/236x/53/1b/65/531b652b87f713592ccce2bc673b3f08.jpg",
        "https://i.pinimg.com/236x/53/1b/65/531b652b87f713592ccce2bc673b3f08.jpg",
        "https://i.pinimg.com/474x/d5/86/f5/d586f5a7d40d02b7fcea12c0ac8f5f81.jpg",
        "https://i.pinimg.com/474x/4c/19/1f/4c191f6c6b1424a9ee4538708b683cbb.jpg",
        "https://i.pinimg.com/474x/e2/d7/aa/e2d7aa7a6134df45e401e21466877952.jpg",
        "https://i.pinimg.com/236x/71/31/ca/7131caf315dfaf6e8bfbb7f08082b11b.jpg",
        "https://i.pinimg.com/236x/0e/1f/96/0e1f96cd500bb63b770069397117d721.jpg",
        "https://i.pinimg.com/236x/cb/6d/3e/cb6d3eab345e6d6fa2493734fc345979.jpg",
        "https://i.pinimg.com/236x/b2/4d/a7/b24da74008c9471141ff99044e4e3861.jpg",
        "https://i.pinimg.com/236x/53/1b/65/531b652b87f713592ccce2bc673b3f08.jpg",
        "https://i.pinimg.com/236x/53/1b/65/531b652b87f713592ccce2bc673b3f08.jpg",
        "https://i.pinimg.com/474x/d5/86/f5/d586f5a7d40d02b7fcea12c0ac8f5f81.jpg",
        "https://i.pinimg.com/474x/4c/19/1f/4c191f6c6b1424a9ee4538708b683cbb.jpg",
        "https://i.pinimg.com/474x/e2/d7/aa/e2d7aa7a6134df45e401e21466877952.jpg",
    ];

    return (
        <>
            <AppLayout>
                <Head title="Home" />
                <div className="min-h-screen px-4 space-y-5 lg:px-28">
                    <HomeHeroSection heroData={heroData} />
                    <MostRecommendedSection />
                    <ImageWallGallery images={sampleImages}  />
                    {/* Uncomment the following lines to include the MiddleSection and HomeHero components */}
                    {/* <MiddleSection /> */}
                    {/* <HomeHero /> */}
                    {/* <MiddleSection /> */}
                    {/* <HomeHero /> */}
                    {/* <MiddleSection /> */}
                </div>
            </AppLayout>

        </>
    );
}
