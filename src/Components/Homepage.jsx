import React from "react";


export function HomePage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tighter text-gray-900">
            YOGA HEALS THE SOUL
          </h1>
          <h2 className="text-xl text-gray-600">LANDING PAGE TEMPLATE</h2>
          <p className="text-gray-600 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Nec purus odio nulla prom.
            Id at nec velit convallis mauris. Tortor pretium lorem
          </p>
          <button className="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            READ MORE
          </button>
        </div>
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
