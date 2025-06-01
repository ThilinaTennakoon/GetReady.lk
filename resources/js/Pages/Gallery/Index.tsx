import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";




export default function Gallery(
    {


    }: {
            // heroData: any
        }) {
    const [expanded, setExpanded] = useState(false);

    const sampleImages = [
        "https://i.pinimg.com/474x/b8/c3/04/b8c3049e0d7d7936a15a5c572d4f4cc0.jpg",
        "https://i.pinimg.com/474x/d3/d6/24/d3d6242d9fb8c62043f9b7a7f11912c2.jpg",
        "https://i.pinimg.com/474x/2d/fc/19/2dfc1902973b42520c55cedce1409cc1.jpg",
        "https://i.pinimg.com/474x/cd/db/a6/cddba6197270e87824e489b20e38e0fc.jpg",
        "https://i.pinimg.com/474x/b5/73/3a/b5733a4bc51a7ffd113024b78ffdd5ad.jpg",
        "https://i.pinimg.com/236x/fb/a5/f5/fba5f544725e5ffcc5bb32bc44abbe6c.jpg",
        "https://i.pinimg.com/474x/32/85/d5/3285d53ea856a59733f543d0a478399e.jpg",
        "https://i.pinimg.com/474x/cf/e9/60/cfe960588d9e9cf0fd8200d2f4967766.jpg",
        "https://i.pinimg.com/474x/a6/fb/a0/a6fba0cd13364f9eba4d5c1e26710f19.jpg",
        "https://i.pinimg.com/474x/33/88/59/3388591b0530882f48b46a140f623d16.jpg",
        "https://i.pinimg.com/736x/87/36/07/873607b50caa5cdb27011b4b38a6a062.jpg",
        "https://i.pinimg.com/474x/91/51/57/915157bff376e1a1f85d13a7937143b1.jpg",
        "https://i.pinimg.com/474x/f2/55/21/f2552151220216e7c82f596eb22a58c4.jpg",
        "https://i.pinimg.com/474x/f7/94/9b/f7949b7fcf3198f18582d459749be9e4.jpg",
        "https://i.pinimg.com/474x/ce/96/f9/ce96f9a12ef98eeab391f3e5401a9800.jpg",



    ];
    return (
        <>
            <AppLayout>
                <Head title="Gallery" />
                <div className="min-h-screen px-4 mt-24 space-y-10 md:space-y-16 lg:space-y-20 lg:px-28">
                    <div className="relative px-4 py-6 sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-xl font-semibold text-center text-yellow-500 font-caveat sm:text-5xl">
                            Captured Moments
                        </h2>

                        <div
                            className={`relative transition-all duration-500 ${expanded
                                ? 'max-h-full'
                                : 'max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] xl:max-h-[900px]'
                                } overflow-hidden`}
                        >
                            <div className="gap-2 space-y-2 columns-2 sm:columns-3 lg:columns-4">
                                {sampleImages.map((src, index) => (
                                    <div key={index} className="w-full break-inside-avoid group">
                                        <img
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            loading="lazy"
                                            className="w-full transition-transform duration-300 rounded-lg shadow-md group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Gradient fade only when not expanded */}
                            {!expanded && (
                                <div className="absolute inset-x-0 bottom-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-white via-white/90 to-transparent" />
                            )}
                        </div>

                        {/* See More / See Less Button */}
                        <div className="relative z-20 flex justify-center mt-6">
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="px-6 py-2 text-sm font-medium text-white transition duration-300 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-300 sm:text-base"
                            >
                                {expanded ? 'See Less' : 'See More'}
                            </button>
                        </div>
                    </div>

                </div>
            </AppLayout>

        </>
    );
}
