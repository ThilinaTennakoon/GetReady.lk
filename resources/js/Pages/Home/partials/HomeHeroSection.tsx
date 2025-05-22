import { PrimaryLink } from "@/Components/elements/buttons/PrimaryButton";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 860 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
        breakpoint: { max: 769, min: 500 },
        items: 1,
        slidersToSlide: 1,
    },
    mobile: {
        // breakpoint: { max: 464, min: 0 },
        breakpoint: { max: 500, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.,
    },
};

const useWindowWidth = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};

const HomeHeroSection = ({ heroData }: any) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const width = useWindowWidth(); // 👈 Track screen width

    // Choose background image based on screen width
    const backgroundImage =
        width < 640
            ? heroData[activeSlide]?.mobile_image_url
            : heroData[activeSlide]?.image_url;

    const CustomDot = ({ onClick, active }: any) => (
        <ul className="px-1 h-[40px]">
            <li
                className={
                    active
                        ? "active mb-0 lg:mb-24 border-2 border-primary px-3"
                        : "inactive mb-0 lg:mb-24 border-2 border-white px-2"
                }
                onClick={() => onClick()}
            ></li>
        </ul>
    );

    const ButtonGroup = ({ carouselState }: any) => {
        setActiveSlide(carouselState.currentSlide);
        return null;
    };

    return (
        <div
            id="heroSection"
            className="lg:mt-[120px] mt-[80px] bg-gray-500 max-w-7xl mx-auto h-full lg:rounded-3xl rounded-none bg-no-repeat bg-cover bg-center sm:bg-right"
            style={{
                backgroundColor: "#F8F8F8",
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["medium", "mobile"]}
                customButtonGroup={<ButtonGroup />}
                showDots={true}
                autoPlay={true}
                rewind={true}
                swipeable={true}
                draggable={true}
                ssr={true}
                autoPlaySpeed={10000}
                transitionDuration={500}
                keyBoardControl={true}
                rewindWithAnimation={true}
                customDot={<CustomDot />}
                containerClass="carousel-container bg-transparent lg:rounded-3xl rounded-none h-[400px]"
                dotListClass="w-full"
                itemClass="w-full"
            >
                {heroData?.map((slider: any, index: any) => (
                    <>
                        {/* <Link
                                href={slider?.link ?? "#"}
                                className="flex items-center justify-center h-full sm:hidden "
                            >
                                <img
                                    src={slider?.mobile_image_url}
                                    className="flex items-center justify-center object-cover h-full "
                                    alt="Hero Image"
                                />
                            </Link> */}
                        {/* <Link
                                href={slider?.link ?? "#"}
                                className="items-center justify-center hidden h-full rounded-none lg:flex lg:rounded-3xl"
                            >
                                <img
                                    src={slider?.image_url}
                                    className="flex items-center justify-center object-cover object-center rounded-3xl h-full max-h-[590px] w-full "
                                    alt="Hero Image"
                                />
                            </Link> */}
                        {/* <div className="sr-only">
                                <h6>{slider?.sub_title}</h6>
                                <h1>{slider?.title}</h1>
                                <p>{slider?.intro}</p>
                            </div> */}
                        <div className="hidden   sm:grid grid-cols-1 lg:grid-cols-2 bg-transparent lg:h-[400px] h-full items-center">
                            <div className="relative flex items-center justify-center text-center py-10 lg:pl-28 pl-10  pr-10 lg:h-[400px] order-2 w-full  lg:justify-start lg:order-1">
                                <div className="hidden h-full sm:flex ">
                                    <div className="relative flex flex-col justify-center items-left lg:text-left ">
                                        <p className="py-1 font-[700] sm:text-3xl lg:text-black text-white text-xl  ">
                                            {slider?.sub_title}
                                        </p>
                                        <h1 className="font-display sm:text-6xl lg:text-black text-primary text-4xl font-bold leading-[1.5] xl:leading-[1.2] tracking-tight ">
                                            {slider?.title}
                                        </h1>
                                        <div className="mt-2 text-lg font-medium text-white lg:text-gray-700 sm:text-xl">
                                            {slider?.intro?.substring(
                                                0,
                                                150
                                            )}
                                            {slider?.intro?.length > 150 &&
                                                "..."}
                                        </div>
                                        <div className="my-2 ">
                                            <PrimaryLink
                                                href={slider?.link}
                                                key={index}
                                                className="bg-green-500 lg:text-base lg:py-1 lg:px-3 "
                                            >
                                                {slider?.button_name ??
                                                    "Explore"}
                                            </PrimaryLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="items-end justify-center order-1 hidden w-full h-full lg:flex lg:order-2">
                                    <img
                                        src={slider?.image_url}
                                        alt="Hero Image"
                                        className="object-cover w-auto h-full mx-auto"
                                    />
                                </div> */}
                        </div>
                    </>
                ))}
            </Carousel>
        </div>
    );
};
export default HomeHeroSection;
