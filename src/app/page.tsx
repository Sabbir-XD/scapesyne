import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/sections/Banner";
import BuildForEveryone from "@/Components/sections/BuildForEveryone";
import Features from "@/Components/sections/Features";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <Navbar />
      <Banner />
      <Features />
      <BuildForEveryone />
    </main>
  );
}
