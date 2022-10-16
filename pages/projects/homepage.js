import Choices from "../../components/Choices";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";
import OrganizationCard from "../../components/OrganizationCard";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Choices />
      <div className="bg-orange-600 py-10">
        <p className="text-5xl text-white font-black text-bold my-8 mx-12">
          Trending Projects
        </p>
        <div className="mx-12 flex flex-row justify-around">
          <OrganizationCard />
          <OrganizationCard />
          <OrganizationCard />
          <OrganizationCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
