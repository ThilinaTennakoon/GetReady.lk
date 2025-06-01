import { useState } from 'react';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const routes = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const loginRoutes = [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
    ];

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md backdrop-blur-sm animate-fade-in">
                <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-[95%] sm:max-w-[85%] sm:px-2 lg:px-4">
                    {/* Logo */}
                    <div className="text-xl font-bold text-yellow-500">
                        <a href="#home">GetReady.LK</a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="items-center hidden space-x-6 md:flex">
                        {routes.map((route) => (
                            <a
                                key={route.name}
                                href={route.href}
                                className="font-medium text-gray-700 transition hover:text-yellow-500"
                            >
                                {route.name}
                            </a>
                        ))}
                    </div>

                    {/* Login/Register Buttons (Desktop Only) */}
                    <div className="items-center hidden space-x-4 md:flex">
                        {loginRoutes.map((route) => (
                            <a
                                key={route.name}
                                href={route.href}
                                className="px-4 py-1 text-sm font-medium text-yellow-500 transition border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white"
                            >
                                {route.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-yellow-600 md:hidden"
                        aria-label="Open menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-yellow-500">Menu</h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-600 hover:text-yellow-500"
                        aria-label="Close menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col p-4 space-y-4">
                    {routes.map((route) => (
                        <a
                            key={route.name}
                            href={route.href}
                            onClick={() => setSidebarOpen(false)}
                            className="font-medium text-gray-700 transition hover:text-yellow-500"
                        >
                            {route.name}
                        </a>
                    ))}

                    <hr className="my-2 border-gray-200" />

                    {loginRoutes.map((route) => (
                        <a
                            key={route.name}
                            href={route.href}
                            onClick={() => setSidebarOpen(false)}
                            className="px-4 py-2 font-medium text-center text-yellow-500 transition border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white"
                        >
                            {route.name}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}
