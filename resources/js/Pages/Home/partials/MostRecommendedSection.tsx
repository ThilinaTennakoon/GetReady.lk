import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const recommendedBlazers = [
    {
        id: 1,
        name: "Classic Black Blazer",
        image: "https://i.pinimg.com/474x/6d/c9/57/6dc957cce26053881e323be2b10f3d48.jpg",
        rating: 4.8,
        price: "Rs. 500/day",
    },
    {
        id: 2,
        name: "Navy Blue Formal Blazer",
        image: "https://i.pinimg.com/474x/f2/55/21/f2552151220216e7c82f596eb22a58c4.jpg",
        rating: 4.7,
        price: "Rs. 450/day",
    },
    {
        id: 3,
        name: "Grey Checkered Blazer",
        image: "https://i.pinimg.com/474x/0b/ae/b7/0baeb76e586db400c97b1c0040d6c60a.jpg",
        rating: 4.6,
        price: "Rs. 550/day",
    },
    {
        id: 4,
        name: "Maroon Party Blazer",
        image: "https://i.pinimg.com/474x/a6/5e/f0/a65ef084183eb45dc9ea5f173d577169.jpg",
        rating: 4.9,
        price: "Rs. 600/day",
    },
    {
        id: 5,
        name: "Beige Casual Blazer",
        image: "https://i.pinimg.com/474x/fa/d0/93/fad093bb38e78000b9f3b84bab5dfdba.jpg",
        rating: 4.5,
        price: "Rs. 400/day",
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const MostRecommendedSection = () => {
    return (
        <div className="flex flex-col ">
            <h2 className="mb-6 text-2xl font-semibold text-center">Most Recommended Blazers</h2>
            <Carousel
                responsive={responsive}
                infinite autoPlay autoPlaySpeed={3000}>
                {recommendedBlazers.map((blazer) => (
                    <div
                        key={blazer.id}
                        className="p-3 m-2 overflow-hidden text-center bg-gray-100 shadow-md rounded-xl"
                    >
                        <img
                            src={blazer.image}
                            alt={blazer.name}
                            className="object-cover w-full mb-3 rounded-lg h-80"
                        />
                        <h3 className="text-lg font-medium">{blazer.name}</h3>
                        <p className="font-semibold text-yellow-500">⭐ {blazer.rating}</p>
                        <p className="text-sm text-gray-700">{blazer.price}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MostRecommendedSection;
