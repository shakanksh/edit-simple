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
		<main className='flex flex-col min-h-screen font-sans bg-accent-100 text-accent-600'>
			<Navbar />
			<Hero />
			<About />
			<Work />
			<Services />
			<Stats />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
