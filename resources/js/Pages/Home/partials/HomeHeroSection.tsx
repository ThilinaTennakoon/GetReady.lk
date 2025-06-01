import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const heroData = [
  {
    id: 1,
    sub_title: "Elegant Blazer Rentals",
    title: "Find Perfect Fit",
    intro:
      "Discover our premium collection of blazers, perfect for weddings, business events, and formal occasions...",
    image_url: "assets/images/hero1.png",
    mobile_image_url: "assets/images/hero1.png",
    link: "#",
  },
  {
    id: 2,
    sub_title: "Stunning Wedding Dresses",
    title: "Dress to Impress",
    intro:
      "Step into elegance with our exquisite range of wedding gowns, designed to make you feel beautiful and confident...",
    image_url: "assets/images/hero2.png",
    mobile_image_url: "assets/images/hero2.png",
    link: "#",
  },
  {
    id: 3,
    sub_title: "Luxury Wedding Car Rentals",
    title: "Arrive in Style",
    intro:
      "Make a lasting impression with our beautifully decorated wedding cars, featuring top models like Toyota Camry...",
    image_url: "assets/images/hero3.png",
    mobile_image_url: "assets/images/hero3.png",
    link: "#",
  },
];

const HomeHeroSection = () => {
  const [windowWidth, setWindowWidth] = React.useState(1024);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={7000}
      transitionDuration={600}
      arrows={false}
      showDots={true}
      containerClass="carousel-container"
    >
      {heroData.map((item, index) => {
        const bgImage = isMobile ? item.mobile_image_url : item.image_url;

        return (
          <div
            key={item.id}
            className="h-[600px] bg-cover bg-center bg-no-repeat flex items-center rounded-lg"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundColor: "#f8f8f8",
            }}
          >
            <div className="grid items-center w-full max-w-[90%] grid-cols-1 px-6 mx-auto lg:grid-cols-2">
              <div className="max-w-xl mx-auto text-center text-white lg:text-black lg:text-left lg:mx-0">
                <p className="text-2xl italic font-caveat ">{item.sub_title}</p>
                <h1 className="py-2 text-4xl font-semibold sm:text-6xl font-lobster">
                  {item.title}
                </h1>
                <p className="mt-2 text-xl font-medium ">
                  {item.intro.length > 150
                    ? item.intro.substring(0, 150) + "..."
                    : item.intro}
                </p>
                <a
                  href={item.link}
                  className="inline-block px-5 py-2 mt-4 text-white bg-green-500 rounded-md"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeHeroSection;
