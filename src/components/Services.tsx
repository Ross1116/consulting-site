import { cn } from "@/lib/utils";
import Image from "next/image";
import purple from "../../public/purple-dots.jpg";
import portrait from "../../public/portrait.jpg";
import crane from "../../public/crane.jpg";
import plan from "../../public/planning.jpg";

const serviceData = [
  {
    id: 1,
    title: "Structural Engineering",
    description:
      "Expert analysis and design of structures that meet safety, functionality, and aesthetic requirements. Our engineers deliver innovative solutions for buildings, bridges, and infrastructure that stand the test of time while optimizing materials and construction costs.",
    subtitle: "Innovative & Resilient Structures",
    imageBg: crane,
  },
  {
    id: 2,
    title: "Transportation Planning",
    description:
      "Comprehensive transportation solutions that enhance mobility, accessibility, and safety while minimizing environmental impact. We develop strategic plans that integrate all modes of transportation to create efficient systems that serve communities and businesses alike.",
    subtitle: "Sustainable Mobility Solutions",
    imageBg: plan,
  },
  {
    id: 3,
    title: "Environmental Consulting",
    description:
      "Environmental assessments, permitting, and compliance services that balance development needs with ecological preservation. Our specialists conduct thorough impact studies and develop mitigation strategies to ensure projects meet regulatory requirements while protecting natural resources.",
    subtitle: "Responsible Development Practices",
    imageBg: purple,
  },
  {
    id: 4,
    title: "Urban Planning & Design",
    description:
      "Thoughtful urban planning that creates vibrant, sustainable communities. We collaborate with stakeholders to develop master plans that address current needs while anticipating future growth, emphasizing livability, connectivity, and economic vitality.",
    subtitle: "Creating Livable Communities",
    imageBg: portrait,
  },
  {
    id: 5,
    title: "Construction Management",
    description:
      "Comprehensive oversight of construction projects from inception to completion. Our project managers ensure quality control, schedule adherence, and budget management while facilitating communication between all parties to deliver successful outcomes for even the most complex projects.",
    subtitle: "Seamless Project Delivery",
    imageBg: "bg-gradient-to-br from-[#A100FF]/20 to-blue-400/20",
  },
  {
    id: 6,
    title: "Infrastructure Assessment",
    description:
      "Detailed evaluation and rehabilitation recommendations for existing infrastructure. Our engineers utilize advanced technologies to identify structural issues, assess remaining service life, and develop cost-effective maintenance and upgrade strategies for bridges, roads, and facilities.",
    subtitle: "Extending Asset Lifecycles",
    imageBg: "bg-gradient-to-br from-[#A100FF]/20 to-blue-400/20",
  },
  {
    id: 7,
    title: "Geotechnical Engineering",
    description:
      "Specialized soil and foundation engineering to ensure structural stability and safety. Our geotechnical experts conduct comprehensive site investigations, soil testing, and analysis to develop appropriate foundation designs and earthwork recommendations for all terrain conditions.",
    subtitle: "Ground-Up Stability Solutions",
    imageBg: "bg-gradient-to-br from-[#A100FF]/20 to-blue-400/20",
  },
  {
    id: 8,
    title: "Surveying & Mapping",
    description:
      "Precise land surveying and mapping services utilizing state-of-the-art technology. Our surveying team provides accurate boundary determinations, topographic mapping, and construction staking to establish the critical foundations for successful project planning and execution.",
    subtitle: "Precision Measurement & Mapping",
    imageBg: "bg-gradient-to-br from-[#A100FF]/20 to-blue-400/20",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-theme-dark">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          OUR SERVICES
        </h2>
        <p className="text-xl text-white/80 text-center max-w-4xl mx-auto">
          Comprehensive civil engineering solutions designed to build
          sustainable infrastructure and create lasting value for communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
          {serviceData.map((service) => {
            const isImageBackground = typeof service.imageBg !== "string";

            return (
              <div
                key={service.id}
                className="group relative h-[420px] cursor-pointer overflow-hidden transition-all duration-500"
              >
                {/* Card Background */}
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-700 transform origin-top-left group-hover:scale-[5]",
                    !isImageBackground ? service.imageBg : ""
                  )}
                >
                  {isImageBackground && (
                    <div className="absolute inset-0">
                      <Image
                        src={service.imageBg}
                        alt=""
                        fill
                        className="object-cover opacity-50 transition-all duration-700 group-hover:blur-md"
                        priority
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  <div>
                    {/* Title area */}
                    <div className="space-y-3 mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 font-semibold">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description that slides in from right on hover */}
                    <div className="transform translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Expand button at bottom */}
                  <div className="flex justify-end w-full mt-auto">
                    <div className="flex space-x-2 text-right transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="hover:underline text-white font-medium">
                        Learn More
                      </div>
                      <div>&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
