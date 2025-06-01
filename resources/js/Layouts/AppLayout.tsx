import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";

export default function AppLayout(
    {
        children,
        isFooter = true,
        isHeader = true,

    }: {
        children: React.ReactNode,
        isFooter?: boolean,
        isHeader?: boolean,
    }) {
    const appName = import.meta.env.VITE_APP_NAME || "Get Ready";
    return (
        <div className="relative flex flex-col min-h-screen bg-white">
            <div
                className="absolute inset-0 object-fill bg-repeat pointer-events-none opacity-20 bg-background-pattern-mobile lg:bg-background-pattern"
                aria-hidden="true"
            />

            {/* Header */}
            {/* {isHeader && <Header appName={appName} />} */}
            <Header />

            {/* Main content */}
            <main className="z-10">{children}</main>

            {/* Footer */}
            {/* {isFooter && <Footer />} */}
            <Footer />
        </div>

    );
}
