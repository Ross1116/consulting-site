import { Cloud, Database, Lock, Code, BarChart, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceData = [
  {
    id: 1,
    title: "Cloud Solutions",
    icon: Cloud,
    description:
      "Transform your business with secure, scalable cloud infrastructure and migration services.",
    subtitle: "Secure & Scalable Infrastructure",
    imageBg: "bg-gradient-to-br from-theme-purple/30 to-theme-blue/30",
  },
  {
    id: 2,
    title: "Data & Analytics",
    icon: Database,
    description:
      "Unlock the power of your data with advanced analytics and business intelligence solutions.",
    subtitle: "Actionable Business Insights",
    imageBg: "bg-gradient-to-br from-theme-blue/30 to-theme-purple/30",
  },
  {
    id: 3,
    title: "Cybersecurity",
    icon: Lock,
    description:
      "Protect your digital assets with our comprehensive security services and solutions.",
    subtitle: "Advanced Threat Protection",
    imageBg: "bg-gradient-to-br from-theme-blue/30 to-theme-purple/30",
  },
  {
    id: 4,
    title: "Application Development",
    icon: Code,
    description:
      "Custom software solutions built with cutting-edge technologies to meet your business needs.",
    subtitle: "Custom Software Solutions",
    imageBg: "bg-gradient-to-br from-theme-blue/30 to-theme-purple/30",
  },
  {
    id: 5,
    title: "Business Consulting",
    icon: BarChart,
    description:
      "Strategic advice and implementation support to drive business transformation and growth.",
    subtitle: "Strategic Business Growth",
    imageBg: "bg-gradient-to-br from-theme-purple/30 to-theme-blue/30",
  },
  {
    id: 6,
    title: "Digital Transformation",
    icon: Laptop,
    description:
      "End-to-end digital transformation strategies to revolutionize your business processes.",
    subtitle: "Business Process Revolution",
    imageBg: "bg-gradient-to-br from-theme-blue/30 to-theme-purple/30",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-theme-dark">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-center text-white mb-4">Our Projects</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Comprehensive solutions designed to transform your business and drive
          innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
              >
                {/* Card Background with Icon */}
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-700 transform origin-top-left group-hover:scale-[5]",
                    service.imageBg
                  )}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={100} className="text-white/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.subtitle}</p>
                  </div>

                  {/* Description that slides in from right on hover */}
                  <div className="bg-theme-dark/80 p-4 rounded-lg transform translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                    <div className="mt-4 flex space-x-2 justify-end w-full">
                      <div className="flex space-x-2 text-right">
                        <div className="hover:underline">
                          Expand
                        </div>
                        <div>&gt;</div>
                      </div>
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
