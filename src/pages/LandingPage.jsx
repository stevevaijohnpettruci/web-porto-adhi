import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

function LandingPage({ onViewProject }) {
  const scrollToWork = () =>
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main>
      <HeroSection onViewWork={scrollToWork} />
      <ProjectsSection onViewProject={onViewProject} />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

export default LandingPage;
