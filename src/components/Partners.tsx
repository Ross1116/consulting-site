import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faSass,
  faAngular,
  faNode,
  faVuejs,
  faPython,
  faAws
} from "@fortawesome/free-brands-svg-icons";

const Partners = () => {
  const licensedPartners = [
    {
      id: 1,
      icon: faReact,
      hoverClass: "group-hover:text-[#61DAFB]",
      mobileClass: "sm:text-[#61DAFB] md:text-gray-400",
    },
    {
      id: 2,
      icon: faSass,
      hoverClass: "group-hover:text-[#CC6699]",
      mobileClass: "sm:text-[#CC6699] md:text-gray-400",
    },
    {
      id: 3,
      icon: faAngular,
      hoverClass: "group-hover:text-[#DD0031]",
      mobileClass: "sm:text-[#DD0031] md:text-gray-400",
    },
    {
      id: 4,
      icon: faNode,
      hoverClass: "group-hover:text-[#68A063]",
      mobileClass: "sm:text-[#68A063] md:text-gray-400",
    },
    {
      id: 5,
      icon: faVuejs,
      hoverClass: "group-hover:text-[#42B883]",
      mobileClass: "sm:text-[#42B883] md:text-gray-400",
    },
    {
      id: 6,
      icon: faJsSquare,
      hoverClass: "group-hover:text-[#F7DF1E]",
      mobileClass: "sm:text-[#F7DF1E] md:text-gray-400",
    },
    {
      id: 7,
      icon: faPython,
      hoverClass: "group-hover:text-[#3776AB]",
      mobileClass: "sm:text-[#3776AB] md:text-gray-400",
    },
    {
      id: 8,
      icon: faAws,
      hoverClass: "group-hover:text-[#FF9900]",
      mobileClass: "sm:text-[#FF9900] md:text-gray-400",
    },
  ];
  return (
    <section className="py-20 bg-theme-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LICENSED PARTNERS
          </h2>
          <p className="text-xl text-white/80">
            Professional accreditations and industry affiliations that ensure
            our quality standards.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {licensedPartners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:scale-115 gap-4 cursor-pointer h-24 mb-2"
            >
              <div className="transition-all duration-300 my-2">
                <FontAwesomeIcon
                  icon={partner.icon}
                  className={`${partner.mobileClass} ${partner.hoverClass} transition-colors duration-300`}
                  style={{ fontSize: "80px", width: "80px", height: "80px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;