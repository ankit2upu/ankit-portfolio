import { Header } from '@/app/components/header';
import { Hero } from '@/app/components/hero';
import { About } from '@/app/components/about';
import { Projects } from '@/app/components/projects';
import { Skills } from '@/app/components/skills';
import { Contact } from '@/app/components/contact';
import { Footer } from '@/app/components/footer';
import { ScrollProgress } from '@/app/components/scroll-progress';
import { ScrollToTop } from '@/app/components/scroll-to-top';

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
