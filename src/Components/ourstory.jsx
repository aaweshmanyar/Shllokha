import React from "react";

const StorySection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="relative aspect-[3/4] w-full">
          <img
            src="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/home/banner2.png"
            alt="Yoga meditation pose on beach"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Text Content Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-teal-900 pb-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-400">
              Our story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Yoglove is dedicated to delivering comprehensive wellness services to
              individuals and companies worldwide. Our offerings encompass both
              online and offline yoga programming and education, all led by the
              esteemed Ira Trivedi, a prominent figure in the yoga and wellness
              community in India. Founded by Ira Trivedi, a best-selling author and
              Yoga Acharya, Yoglove is built on a foundation of extensive expertise
              and passion.
            </p>
          </div>
          <button 
            className="bg-[#d3b19a]  text-white px-8 py-2 rounded-md transition-colors"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
