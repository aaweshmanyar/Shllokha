import React from "react";

const Card = ({ imgSrc, altText, title, description, tags, tagStyles, iconBgColor }) => {
  return (
    <div className="card">
      <div className="card-inner relative w-full h-[18.75rem] bg-white rounded-[1.25rem] border-b-r-0 overflow-hidden" style={{ "--clr": "#fff" }}>
        <div className="box relative w-full h-full bg-white rounded-[1.25rem] overflow-hidden">
          <div className="imgBox absolute inset-0">
            <img
              src={imgSrc}
              alt={altText}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="icon absolute bottom-[-0.375rem] right-[-0.375rem] w-[6rem] h-[6rem] rounded-tl-[50%]" style={{ backgroundColor: iconBgColor }}>
            <div className="iconBox absolute inset-[0.625rem] bg-gray-800 rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110">
              <span className="cursor-pointer material-symbols-outlined text-white text-[1.5rem]" >
               ↗
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="content p-[0.938rem_0.625rem]">
        <h3 className="capitalize text-[1.5rem] md:text-[1.8rem]">
          {title}
        </h3>
        <p className="my-[0.625rem_0_1.25rem] text-gray-600">{description}</p>
        <ul className="mt-4 cursor-pointer flex flex-wrap items-center gap-[0.625rem]">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`uppercase font-bold text-[0.8rem] p-[0.375rem_0.625rem] rounded-[0.188rem] ${tagStyles[index]}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CardsSection = () => {
  const cardData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Trust & Co.",
      title: "trust & co.",
      description:
        "Fill out the form and the algorithm will offer the right team of experts",
      tags: ["branding", "packaging"],
      tagStyles: ["text-[#704a31] bg-[#d3b19a]", "text-[#1e3938] bg-[#70b3b1]"],
      iconBgColor: "#d3b19a",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Tonic",
      title: "tonic",
      description:
        "Fill out the form and the algorithm will offer the right team of experts",
      tags: ["branding", "marketing"],
      tagStyles: ["text-[#704a31] bg-[#d3b19a]", "text-[#1e3938] bg-[#70b3b1]"],
      iconBgColor: "#d3b19a",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Shower Gel",
      title: "shower gel",
      description:
        "Fill out the form and the algorithm will offer the right team of experts",
      tags: ["branding", "packaging"],
      tagStyles: ["text-[#704a31] bg-[#d3b19a]", "text-[#1e3938] bg-[#70b3b1]"],
      iconBgColor: "#d3b19a",
    },
  ];

  return (
    <section className="py-[min(20vh,2rem)] w-[calc(min(76.5rem,90%))] mx-auto text-black">
      <h2 className="capitalize text-center text-[2rem]">See our Latest Events</h2>
      <div className="container mt-20 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
