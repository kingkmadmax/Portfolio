import Image from "next/image";
import HeroSection from "./components/HeroSection"
export default function Home() {
  return (
    <div className=" ">
      <main className="flex min-h-screen flex-col bg-black container mx-auto py-12 px-15">

        <HeroSection />

       
      
      </main>
     
    </div>
  );
}
