import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add this for autoplay styles
import { Navigation, Autoplay } from "swiper/modules"; // Use "swiper/modules" for imports


const Card = ({ children, className }) => (
  <div className={` rounded-lg ${className}`}>{children}</div>
);

export default function Page() {
  return (
    <div className="min-h-screen  px-4 py-8 md:px-6 lg:px-8">
      <main className="mx-auto max-w-5xl space-y-16">
        {/* Podcast Section */}
        <section className="relative">
          <h1 className="mb-8 text-center text-3xl font-semibold text-slate-800">
            See What Our People Love
          </h1>
          <div className="relative">
            {/* Green background accent */}
            <div className="absolute right-0 top-8 h-[300px] w-[200px] bg-olive-600/20"></div>
            {/* Video slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="relative mx-auto max-w-3xl overflow-hidden shadow-lg"
            >
              <SwiperSlide>
                <Card className="relative">
                  <div className="aspect-video">
                    <iframe
                      src="https://youtu.be/1C-6SdKKjgo?si=BVryM8e94rVL9DoE"
                      title="Shlloka - Body to Being Podcast"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="relative">
                  <div className="aspect-video">
                    <iframe
                      src="https://youtu.be/1C-6SdKKjgo?si=BVryM8e94rVL9DoE"
                      title="Another Testimonial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="relative">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/yet-another-video-id"
                      title="Yet Another Testimonial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </div>
  );
}
