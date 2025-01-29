import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* About Us Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.yoglove.in_about-tcMLRg5sLvwAPoVqbPfoqLWKrZUjwl.png"
            alt="Yoga pose"
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-[#00515E] text-4xl font-semibold">About Us</h1>
          <p className="text-[#00515E] leading-relaxed">
            YogLove, a beacon of classical yoga tradition in the realm of wellness services, brought to you by the
            esteemed Namami Yoga Foundation. With a steadfast commitment to holistic well-being, YogLove offers a
            comprehensive yoga program tailored for individuals and companies worldwide.
          </p>
          <p className="text-[#00515E] leading-relaxed">
            At YogLove, authenticity reigns supreme. Rooted deeply in the ancient teachings of classical yoga, our
            classes provide a genuine and enriching experience. Led by the renowned Ira Trivedi, a luminary in the yoga
            and wellness domain in India, our programs embody the essence of pranayama, asana, and dhyana.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-[#00515E] text-white grid md:grid-cols-2 gap-8 p-12 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p>To make the transformative power of classical yoga accessible to all for holistic well-being.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p>To deliver authentic yoga programs rooted in ancient tradition.</p>
        </div>
      </div>

      {/* Meet the Founder Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.yoglove.in_about-tcMLRg5sLvwAPoVqbPfoqLWKrZUjwl.png"
            alt="Founder"
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-[#00515E] text-3xl font-semibold">Meet the Founder</h2>
          <p className="text-[#00515E] leading-relaxed">
            Ira Trivedi is a best-selling author and Yoga Acharya. She has written eight books, including fiction,
            non-fiction, and children's books. She teaches yoga from her studio in Mumbai, her global retreat programs,
            and her online programs.
          </p>
          <button className="bg-[#E17259] text-white px-6 py-2 rounded">Read More</button>

          <div className="pt-4">
            <p className="text-[#00515E] mb-2">
              Know more on <a href="http://www.iratrivedi.in" className="underline">www.iratrivedi.in</a>
            </p>
            <p className="text-[#00515E] mb-2">Follow Ira Trivedi on social media</p>
            <div className="flex gap-4">
              <a href="#" className="text-[#00515E]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#00515E]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#00515E]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
