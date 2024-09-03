import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-accent-100 text-accent-600">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Testimonials name="Anna D Silva">
        Working with Edit Simple has been a pleasure and is something that I
        would strongly recommend. Their work is of the highest quality, are
        always willing to make any required revisions, and they always complete
        the task on time.
      </Testimonials>
      <Services />
      <Testimonials name="Samira Ardalan">
        Edit Simple has been awesome for my reels. Their edits really helped my
        content stand out, and it’s been great seeing my views go up into the
        millions. They’re easy to work with and really know their stuff.
      </Testimonials>
      <Stats />
      <Testimonials name="Justin">
        Edit Simple’s quality is a clear step up from my previous video editor.
        The final product is more polished and engaging, and it shows in the
        increased views. The team is professional and easy to work with.
      </Testimonials>
      <Contact />
      <Footer />
    </main>
  );
}
