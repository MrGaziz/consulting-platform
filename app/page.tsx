import {
  Navigation,
  Hero,
  Services,
  About,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
