import Link from "../ui/Link";

export default function Navbar() {
	return (
		<header className='px-8 py-6 flex items-center justify-between'>
			<img src='/logo.svg' alt='logo' className='w-32' />
			<nav className='flex items-center gap-8'>
				<Link href='#work'>Work</Link>
				<Link href='#services'>Services</Link>
				<Link href='#testimonials'>Testimonials</Link>
				<Link href='/blog'>Blog</Link>
				<Link href='#contact'>Contact</Link>
			</nav>
		</header>
	);
}
