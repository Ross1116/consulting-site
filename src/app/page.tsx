import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

const Global = dynamic(() => import("@/components/Global"), {
  loading: () => (
    <div className="py-24 container mx-auto">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          We Deliver Solutions Worldwide
        </h2>
        <p className="text-xl text-white/80 text-center max-w-4xl mx-auto">
          With clients in over 50+ countries, we bring innovation everywhere.
          Our global network ensures we understand local markets while
          delivering world-class solutions.
        </p>
      </div>
      <div className="w-full aspect-[5/2] rounded-lg bg-gray-800/20 relative overflow-hidden">
        <Loader />
      </div>
    </div>
  )
});

const Page = () => {
  return (
    <div className="min-h-screen bg-theme-black">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Global />
    </div>
  );
};
export default Page;