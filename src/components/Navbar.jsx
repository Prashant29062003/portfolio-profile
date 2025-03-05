import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaDesktop, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
    const [menuOpen, setMenuOpen] = useState(false);
    const [themeMenuOpen, setThemeMenuOpen] = useState(false);

    // Apply theme on load
    useEffect(() => {
        const root = document.documentElement;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        if (theme === "dark") {
            root.classList.add("dark");
        } else if (theme === "light") {
            root.classList.remove("dark");
        } else {
            systemTheme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle theme selection
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        setThemeMenuOpen(false); // Close menu after selection
    };

    // Function to download CV
    const handleDownloadCV = () => {
        const cvUrl = "/PrashantKumar_CV.pdf"; // Update with actual path
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "PrashantKumar_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                        Prashant<span className="text-blue-500">Kumar</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#home" className="hover:text-blue-500 text-gray-900 dark:text-gray-200">Home</a>
                        <a href="#services" className="hover:text-blue-500 text-gray-900 dark:text-gray-200">Service</a>
                        <a href="#projects" className="hover:text-blue-500 text-gray-900 dark:text-gray-200">Project</a>
                        <a href="#contact" className="hover:text-blue-500 text-gray-900 dark:text-gray-200">Contact</a>
                        {/* Download CV Button */}
                        <button
                            onClick={handleDownloadCV}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Download CV
                        </button>
                    </div>

                    {/* Right Side (Theme & Menu Button) */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Selection Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                                className="border px-3 py-2 rounded flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                {theme === "light" ? <FaSun className="text-yellow-500" /> : theme === "dark" ? <FaMoon className="text-white" /> : <FaDesktop />}
                                {theme.charAt(0).toUpperCase() + theme.slice(1)}
                            </button>

                            {/* Dropdown Menu */}
                            {themeMenuOpen && (
                                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-md rounded-md overflow-hidden">
                                    <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => handleThemeChange("light")}>
                                        <FaSun className="text-yellow-500" /> Light Mode
                                    </button>
                                    <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => handleThemeChange("dark")}>
                                        <FaMoon className="text-white" /> Dark Mode
                                    </button>
                                    <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => handleThemeChange("system")}>
                                        <FaDesktop /> System Mode
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                            {menuOpen ? <FaTimes size={24} className="text-gray-900 dark:text-white" /> : <FaBars size={24} className="text-gray-900 dark:text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white dark:bg-gray-900 shadow-md`}>
                <div className="flex flex-col items-center space-y-4 py-4">
                    <a href="#home" className="hover:text-blue-500 text-gray-900 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#services" className="hover:text-blue-500 text-gray-900 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Service</a>
                    <a href="#projects" className="hover:text-blue-500 text-gray-900 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Project</a>
                    <a href="#contact" className="hover:text-blue-500 text-gray-900 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Contact</a>
                    {/* Download CV Button */}
                    <button
                        onClick={() => {
                            handleDownloadCV();
                            setMenuOpen(false);
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
