import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto flex justify-center items-center flex-col px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Get in touch</h2>
        <form className="space-y-4 text-center max-w-md">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
          <textarea 
            rows="4" 
            placeholder="Message" 
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
