import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reservation } from "@/components/Reservation";
import StyleGuide from "@/components/StyleGuide";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="w-full relative max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header/> 
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
    </main>
  );
}
