import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProject from '@/components/FeaturedProject';
import OtherProjects from '@/components/OtherProjects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050507]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <OtherProjects />
      <Experience />
      <Education />
      <Certifications />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
