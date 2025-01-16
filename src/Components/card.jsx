import React from "react";

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg ${className}`}>{children}</div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8 md:px-6 lg:px-8">
      <main className="mx-auto max-w-5xl space-y-16">
        {/* Podcast Section */}
        <section className="relative">
          <h1 className="mb-8 text-center text-3xl font-semibold text-slate-800">
            Shlloka - "Body to Being" Podcast
            <span className="ml-4 inline-block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube%20testimonial-5BScyV91ZxXgvMuVyxPM3EhE9lXCWz.png"
                alt="Decorative leaves"
                width={100}
                height={24}
                className="opacity-80"
              />
            </span>
          </h1>
          <div className="relative">
            {/* Green background accent */}
            <div className="absolute right-0 top-8 h-[300px] w-[200px] bg-olive-600/20"></div>
            {/* Video card with shadow */}
            <Card className="relative mx-auto max-w-3xl overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Shlloka - Body to Being Podcast"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* News Paper Clippings Section */}
        <section>
          <h2 className="text-center text-2xl font-semibold text-slate-800">
            News Paper Clippings
            <span className="ml-4 inline-block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube%20testimonial-5BScyV91ZxXgvMuVyxPM3EhE9lXCWz.png"
                alt="Decorative leaves"
                width={100}
                height={24}
                className="opacity-80"
              />
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4 shadow-md">
              <img
                src="https://via.placeholder.com/300x200"
                alt="News Clipping 1"
                className="rounded-md"
              />
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Card>
            <Card className="p-4 shadow-md">
              <img
                src="https://via.placeholder.com/300x200"
                alt="News Clipping 2"
                className="rounded-md"
              />
              <p className="mt-4 text-gray-700">
                Quasi, reprehenderit. Nemo recusandae sapiente aspernatur
                fugiat!
              </p>
            </Card>
            <Card className="p-4 shadow-md">
              <img
                src="https://via.placeholder.com/300x200"
                alt="News Clipping 3"
                className="rounded-md"
              />
              <p className="mt-4 text-gray-700">
                Molestias, debitis. Harum quisquam pariatur necessitatibus
                animi.
              </p>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
