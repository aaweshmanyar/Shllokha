import React from "react";

export function HomePage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="absolute w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <circle cx="400" cy="400" r="350" fill="#F3F4F6" />
          </svg>
        </div>

        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-5xl text-[#9e6144] font-bold tracking-tighter ">
            YOGA HEALS THE SOUL
          </h1>
          <h2 className="text-xl text-gray-600">LANDING PAGE TEMPLATE</h2>
          <p className="text-gray-600 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Nec purus odio nulla prom.
            Id at nec velit convallis mauris. Tortor pretium lorem
          </p>
          <button className="bg-[#9e6144] inline-flex items-center justify-center rounded-full  px-6 py-2 text-sm font-medium text-white transition-colors">
            READ MORE
          </button>
        </div>

        {/* Right Section */}
        <div className="relative h-[500px] w-full">
          <img
            src="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/home/banner2.png"
            alt="Yoga Meditation Illustration"
            className="object-contain w-full h-full"
          />

         
        </div>
      </div>

     
    </main>
  );
}
