import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
    const textRef = useRef(null);
    const scrollRef = useRef(null);
    const raysRef = useRef(null);

    useEffect(() => {
        // Text Fade-in Animation
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );

        // Scroll Indicator Animation
        gsap.to(scrollRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.inOut",
        });

        // Sunray Animation (Only for light mode)
        gsap.to(raysRef.current, {
            opacity: 0.3,
            rotate: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden"
        >
            {/* Sunray Effect (Light mode only) */}
            <div
                ref={raysRef}
                className="absolute inset-0 bg-radial-light opacity-20 dark:opacity-0 transition-opacity duration-500"
            ></div>

            {/* Hero Text */}
            <div ref={textRef} className="text-center relative z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Hello there, <br />
                    My name is <span className="text-blue-500">Prashant Kumar</span>.
                </h1>
                <p className="text-lg max-w-xl px-4">
                    I'm a final-year Informatics Engineering student focusing on UI/UX design and web development.
                    Currently exploring Mobile Development and DevOps, preparing me for a tech career.
                </p>
            </div>

            {/* Scroll Down Indicator */}
            <div ref={scrollRef} className="absolute bottom-10 flex flex-col items-center z-10">
                <span className="text-sm">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-300 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gray-500 dark:bg-gray-300 rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
