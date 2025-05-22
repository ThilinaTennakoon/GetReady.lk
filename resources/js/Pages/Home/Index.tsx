import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import HomeHeroSection from "./partials/HomeHeroSection";







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

    return (
        <>
            <AppLayout>
                <Head title="Home" />
                <div className="">
                    <HomeHeroSection heroData={heroData} />
                    {/* <MiddleSection /> */}
                    {/* <HomeHero /> */}
                    {/* <MiddleSection /> */}
                </div>
            </AppLayout>

        </>
    );
}
