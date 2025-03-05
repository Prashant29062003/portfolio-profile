import React from "react";

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800 text-black dark:text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-8">Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded shadow bg-white dark:bg-gray-700">
                        <h3 className="font-semibold mb-2">UI/UX Design</h3>
                        <p>Designing intuitive user interfaces for web and mobile applications.</p>
                    </div>
                    <div className="p-6 rounded shadow bg-white dark:bg-gray-700">
                        <h3 className="font-semibold mb-2">Web Development</h3>
                        <p>Building scalable and responsive websites using modern tech stacks.</p>
                    </div>
                    <div className="p-6 rounded shadow bg-white dark:bg-gray-700">
                        <h3 className="font-semibold mb-2">Mobile Development</h3>
                        <p>Creating cross-platform mobile apps for Android and iOS.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
