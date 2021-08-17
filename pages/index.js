import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
           <Hero/>
           <ProfileSection/>
           <SkillsSection/>
           <ProjectSection/>
           <ContactSection/>
           <Footer/>     
    </>
  );
}
