import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const collectionData = {
    blazer: [
        {
            id: 1,
            name: 'Classic Black Blazer',
            image: 'https://i.pinimg.com/474x/6d/c9/57/6dc957cce26053881e323be2b10f3d48.jpg',
            rating: 4.8,
            price: 'Rs. 500/day',
        },
        {
            id: 2,
            name: 'Navy Blue Formal Blazer',
            image: 'https://i.pinimg.com/474x/f2/55/21/f2552151220216e7c82f596eb22a58c4.jpg',
            rating: 4.7,
            price: 'Rs. 450/day',
        },
        {
            id: 3,
            name: 'Grey Checkered Blazer',
            image: 'https://i.pinimg.com/474x/0b/ae/b7/0baeb76e586db400c97b1c0040d6c60a.jpg',
            rating: 4.6,
            price: 'Rs. 550/day',
        },
        {
            id: 4,
            name: 'Maroon Party Blazer',
            image: 'https://i.pinimg.com/474x/a6/5e/f0/a65ef084183eb45dc9ea5f173d577169.jpg',
            rating: 4.9,
            price: 'Rs. 600/day',
        },
        {
            id: 5,
            name: 'Beige Casual Blazer',
            image: 'https://i.pinimg.com/474x/fa/d0/93/fad093bb38e78000b9f3b84bab5dfdba.jpg',
            rating: 4.5,
            price: 'Rs. 400/day',
        },
    ],
    saree: [
        {
            id: 6,
            name: 'White Bridal Saree',
            image: 'https://i.pinimg.com/474x/2d/fc/19/2dfc1902973b42520c55cedce1409cc1.jpg',
            rating: 4.9,
            price: 'Rs. 700/day',
        },
        {
            id: 7,
            name: 'Silk Saree',
            image: 'https://i.pinimg.com/474x/cf/e9/60/cfe960588d9e9cf0fd8200d2f4967766.jpg',
            rating: 4.8,
            price: 'Rs. 600/day',
        },
        {
            id: 8,
            name: 'Bridal Saree',
            image: 'https://i.pinimg.com/474x/39/86/38/39863859639a4196953ea1814411fa57.jpg',
            rating: 4.9,
            price: 'Rs. 700/day',
        },
        {
            id: 9,
            name: 'Red Saree',
            image: 'https://i.pinimg.com/736x/87/36/07/873607b50caa5cdb27011b4b38a6a062.jpg',
            rating: 4.8,
            price: 'Rs. 600/day',
        },

    ],
    weddingCar: [
        {
            id: 10,
            name: 'Mercedes Benz - White',
            image: 'https://i.pinimg.com/736x/41/cb/96/41cb96d557e6b2d79b33f088bb1ba3a4.jpg',
            rating: 5.0,
            price: 'Rs. 5000/day',
        },
        {
            id: 11,
            name: 'BMW',
            image: 'https://i.pinimg.com/474x/ad/ad/db/adaddb01b8e5ab22971cd26428b5c1f4.jpg',
            rating: 4.9,
            price: 'Rs. 8000/day',
        },
        {
            id: 10,
            name: 'Primo - White',
            image: 'https://i.pinimg.com/474x/b5/73/3a/b5733a4bc51a7ffd113024b78ffdd5ad.jpg',
            rating: 5.0,
            price: 'Rs. 5000/day',
        },
        {
            id: 11,
            name: 'White Car',
            image: 'https://i.pinimg.com/474x/b8/c3/04/b8c3049e0d7d7936a15a5c572d4f4cc0.jpg',
            rating: 4.9,
            price: 'Rs. 8000/day',
        },
    ],
};

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
    const [selectedCollection, setSelectedCollection] = useState<'blazer' | 'saree' | 'weddingCar'>('blazer');

    const handleCollectionChange = (collection: 'blazer' | 'saree' | 'weddingCar') => {
        setSelectedCollection(collection);
    };

    const items = collectionData[selectedCollection];

    return (
        <div className="flex flex-col">
            <div className="relative mb-2 text-center">
                {/* Background Watermark Title */}
                <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 text-center
               hidden sm:block text-[12vw] md:text-[10vw] lg:text-[11vw] font-Bebas tracking-wide uppercase
               text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
               opacity-10 select-none pointer-events-none leading-none px-4 whitespace-nowrap overflow-hidden">
                    Most Recommended
                </h2>

                {/* Foreground Title (actual visible one for section) */}
                <h3 className="relative z-10 mb-6 text-4xl tracking-wide text-yellow-600 md:text-5xl font-Bebas drop-shadow-md">
                    Most Recommended
                </h3>

                <div className="relative z-10 flex flex-wrap justify-center gap-4">
                    {(['blazer', 'saree', 'weddingCar'] as const).map((collection) => {
                        const isSelected = selectedCollection === collection;
                        return (
                            <button
                                key={collection}
                                onClick={() => handleCollectionChange(collection)}
                                className={`relative px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300
                                  after:  ${isSelected
                                        ? ' gradient element-to-rotate text-white shadow-md shadow-yellow-300'
                                        : 'bg-transparent text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white'
                                    }
                                    before:absolute before:inset-0 before:rounded-full before:-z-10 before:transition-all before:duration-300
                                    before:hover:scale-105 before:hover:shadow-[0_0_15px_rgba(234,179,8,0.6)]
                                     `}
                            >
                                {collection === 'weddingCar' ? 'Wedding Car' : collection.charAt(0).toUpperCase() + collection.slice(1)}
                            </button>
                        );
                    })}
                </div>
            </div>


            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="relative pb-3 m-2 overflow-hidden text-center shadow-md group rounded-xl"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full mb-3 h-96"
                        />

                        {/* Name */}
                        <h3 className="text-lg font-medium">{item.name}</h3>

                        {/* Hover Panel - Desktop Only */}
                        <div className="absolute top-0 right-0 z-10 items-center justify-center hidden w-full h-full transition-transform duration-300 transform translate-x-full bg-black md:flex bg-opacity-60 group-hover:translate-x-0 rounded-l-xl">
                            <div className="space-y-3 text-center">
                                <p className="text-white">Perfect for your next occasion!</p>
                                <button className="px-5 py-2 font-semibold text-black transition-transform duration-300 rounded-full shadow-md bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:scale-105">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

        </div>
    );
};

export default MostRecommendedSection;
