import React from "react";

const Card = ({ children, className }) => (
  <div className={`bg-[#e6f2ef] rounded-lg ${className}`}>{children}</div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-[#e6f2ef] px-4 py-8 md:px-6 lg:px-8">
      <main className="mx-auto max-w-5xl space-y-16">
        {/* Podcast Section */}
        <section className="relative">
          <h1 className="mb-8 text-center text-3xl font-semibold text-slate-800">
           See What Our People Love
           
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

       
      </main>
    </div>
  );
}
