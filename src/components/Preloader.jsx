import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const images = document.images;
        let loaded = 0;

        const updateProgress = () => {
            loaded++;
            const percent = Math.floor((loaded / images.length) * 100);
            setProgress(percent);

            if (percent === 100) {
                // Animate out
                gsap.to(".preloader", {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: onComplete,
                });
            }
        };

        // If no images found
        if (images.length === 0) {
            setProgress(100);
            gsap.to(".preloader", { opacity: 0, duration: 0.5, onComplete });
        } else {
            // Listen for each image to load
            Array.from(images).forEach((img) => {
                if (img.complete) {
                    updateProgress();
                } else {
                    img.addEventListener("load", updateProgress);
                    img.addEventListener("error", updateProgress); // in case image fails
                }
            });
        }
    }, [onComplete]);

    return (
        <div className="preloader fixed inset-0 flex flex-col justify-center items-center bg-white dark:bg-gray-900 z-50">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-4" />
            <p className="text-lg font-semibold">{progress}%</p>
        </div>
    );
};

export default Preloader;
