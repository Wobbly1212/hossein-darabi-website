import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CredibilityBar from "@/components/home/CredibilityBar";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <CredibilityBar />
      <ContactCTA />
    </>
  );
}
