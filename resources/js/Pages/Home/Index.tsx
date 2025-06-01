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
            title: "Find Perfect Fit",
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
        "https://i.pinimg.com/474x/32/85/d5/3285d53ea856a59733f543d0a478399e.jpg",
        "https://i.pinimg.com/474x/a6/fb/a0/a6fba0cd13364f9eba4d5c1e26710f19.jpg",
        "https://i.pinimg.com/236x/fb/a5/f5/fba5f544725e5ffcc5bb32bc44abbe6c.jpg",
        "https://i.pinimg.com/474x/33/88/59/3388591b0530882f48b46a140f623d16.jpg",
        "https://i.pinimg.com/474x/d3/d6/24/d3d6242d9fb8c62043f9b7a7f11912c2.jpg",
        "https://i.pinimg.com/474x/cd/db/a6/cddba6197270e87824e489b20e38e0fc.jpg",
        "https://i.pinimg.com/474x/91/51/57/915157bff376e1a1f85d13a7937143b1.jpg",
        "https://i.pinimg.com/474x/f7/94/9b/f7949b7fcf3198f18582d459749be9e4.jpg",
        "https://i.pinimg.com/474x/ce/96/f9/ce96f9a12ef98eeab391f3e5401a9800.jpg",


    ];

    return (
        <>
            <AppLayout>
                <Head title="Home" />
                <div className="min-h-screen px-4 mt-24 space-y-10 md:space-y-16 lg:space-y-20 lg:px-28">
                    <HomeHeroSection  />
                    <MostRecommendedSection />
                    <ImageWallGallery images={sampleImages}  />
                    {/* Uncomment the following lines to include the MiddleSection and HomeHero components */}
                    {/* <MiddleSection /> */}
                    {/* <HomeHero /> */}
                    {/* <MiddleSection /> */}
                    {/* <HomeHero /> */}
                    {/* <MiddleSection /> */}
                    {/* {<Footer />} */}
                </div>
            </AppLayout>

        </>
    );
}
