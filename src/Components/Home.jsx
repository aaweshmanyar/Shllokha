import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <a href="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/logo.png">
          <img
            src="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/logo.png"
            alt="Logo"
            className="w-36"
          />
        </a>
        <nav className="flex gap-6">
          <a href="#" className="text-lg font-bold text-gray-700">
            Home
          </a>
          <a href="#" className="text-lg font-bold text-gray-700">
            Functions
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <div id="home" className="flex flex-wrap justify-center items-center gap-8 mt-8 px-4">
        <div className="w-1/2">
          <img
            src="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/home/banner2.png"
            alt="Banner"
            className="w-full"
          />
        </div>
        <div className="w-1/2 text-center">
          <h1 className="text-teal-600 text-5xl font-bold mb-4">SHLLOKA</h1>
          <p className="text-gray-600 text-lg mb-6">
            Temporibus et ullam impedit odit accusantium, sapiente aut, cumque nihil rerum deserunt est hic
            nisi voluptas consequatur accusamus quibusdam voluptates culpa quisquam.
          </p>
          <a
            href="#"
            className="px-8 py-4 bg-teal-600 text-white text-lg rounded-md hover:bg-teal-700"
          >
            Register now
          </a>
        </div>
      </div>

      {/* Our Classes Section */}
      <div className="bg-teal-600 py-16">
        <h1 className="text-center text-white text-3xl font-bold mb-12">Our Classes</h1>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {["Newbie Class", "Intermediate Class", "Advanced Class"].map((className, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-center w-64">
              <img
                src="https://via.placeholder.com/150"
                alt={className}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h2 className="text-teal-600 text-xl font-bold mb-2">{className}</h2>
              <p className="text-gray-600 text-sm mb-4">
                Lt. At, illum veniam. Earum debitis asperiores voluptatem ut nemo harum voluptatibus.
              </p>
              <a
                href="#"
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Register now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-4">
        <h1 className="text-center text-teal-600 text-3xl font-bold mb-12">Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/300?text=Image+${index + 1}`}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow"
              />
            ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-teal-100 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-teal-600 text-3xl font-bold mb-6">Contact Us</h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Instructor"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
