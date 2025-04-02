import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import Services from '@/components/Services';

const Page = () => {

  return (
    <div className="min-h-screen bg-theme-black">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
    </div>
  );
};

export default Page;
