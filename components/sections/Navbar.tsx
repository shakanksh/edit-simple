import Link from "../ui/Link";

export default function Navbar() {
	return (
		<header className='p-4 md:px-8 md:py-6 flex items-center justify-between font-medium'>
			<img src='/logo.svg' alt='logo' className='w-28 md:w-32' />
			<nav className='hidden md:flex items-center gap-8'>
				<Link href='#work'>Work</Link>
				<Link href='#services'>Services</Link>
				<Link href='#testimonials'>Testimonials</Link>
				<Link href='/blog'>Blog</Link>
				<Link href='#contact'>Contact</Link>
			</nav>
			{/* TODO: Make a hamburger menu */}
		</header>
	);
}
