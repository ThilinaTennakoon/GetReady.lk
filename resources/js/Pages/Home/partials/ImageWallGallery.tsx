import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

type Props = {
    images: string[];
};

const ImageWallGallery: React.FC<Props> = ({ images }) => {

    return (
        <div className="relative space-y-5">
           <div className="relative mb-12 text-center">
                {/* Background Watermark Title */}
                 <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 text-center
               hidden sm:block text-[12vw] md:text-[10vw] lg:text-[11vw] font-Bebas tracking-wide uppercase
               text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
               opacity-10 select-none pointer-events-none leading-none px-4 whitespace-nowrap overflow-hidden">
                    Captured Memories
                </h2>


                {/* Foreground Title (actual visible one for section) */}
                <h3 className="relative z-10 mb-6 text-4xl tracking-wide text-yellow-600 md:text-5xl font-Bebas drop-shadow-md">
                     Captured Memories
                </h3>
            </div>

            <div className="relative transition-all duration-500 max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] xl:max-h-[900px] overflow-hidden">
                <div className="gap-2 space-y-2 columns-2 sm:columns-3 lg:columns-4">
                    {images.map((src, index) => (
                        <div key={index} className="w-full break-inside-avoid group">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                loading="lazy"
                                className="w-full transition-transform duration-300 rounded-lg shadow-md group-hover:scale-90"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-white via-white/90 to-transparent" />
            </div>

            <div className="relative flex justify-center mb-10">
                <Link
                    href={route("gallery")}
                    className="px-6 py-2 text-sm font-medium text-yellow-500 transition-all duration-300 border border-yellow-500 rounded-sm shadow-lg sm:text-base hover:bg-yellow-500 hover:text-white "
                >
                    View Gallery
                </Link>
            </div>
        </div>
    );
};

export default ImageWallGallery;
