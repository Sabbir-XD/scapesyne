import Footer from "@/Components/layout/Footer";
import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/sections/Banner";
import BuildForEveryone from "@/Components/sections/BuildForEveryone";
import FAQ from "@/Components/sections/FAQ";
import Features from "@/Components/sections/Features";
import UserComments from "@/Components/sections/UserComments";

export default function Home() {
  return (
    <main>
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <BuildForEveryone />
        <UserComments />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
