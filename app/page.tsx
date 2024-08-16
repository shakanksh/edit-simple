import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen font-sans bg-accent-100 text-accent-600'>
			<Hero />
			<Featured />
		</main>
	);
}
