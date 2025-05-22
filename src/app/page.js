import Image from "next/image";
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    <div className=" ">
      <main className="flex min-h-screen flex-col bg-black">
        <Navbar />
   <div className ="container mx-auto py-12 px-15">
        <HeroSection />
        <AboutSection/>
    </div>

       
      
      </main>
     
    </div>
  );
}
