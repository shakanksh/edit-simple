import Link from "../ui/Link";

export default function Footer() {
	return (
		<footer className='px-4 md:px-8 pt-32 overflow-clip bg-accent-600 text-accent-100'>
			<div className='flex flex-col gap-16'>
				<div className='grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-8'>
					<div className='flex flex-col gap-6 md:col-start-1 md:col-span-2'>
						<h5 className='text-2xl tracking-normal'>Social</h5>
						<div className='flex flex-col gap-1'>
							<Link href='https://instagram.com/' target='_blank'>
								Instagram
							</Link>
							<Link href='https://youtube.com/' target='_blank'>
								YouTube
							</Link>
							<Link href='https://linkedin.com/' target='_blank'>
								LinkedIn
							</Link>
						</div>
					</div>
					<div className='flex flex-col gap-6 md:col-start-3 md:col-span-2'>
						<h5 className='text-2xl tracking-normal'>Sitemap</h5>
						<div className='flex flex-col gap-1'>
							<Link href='#work'>Work</Link>
							<Link href='#services'>Services</Link>
							<Link href='#testimonials'>Testimonials</Link>
							<Link href='/blog'>Blog</Link>
							<Link href='#contact'>Contact</Link>
						</div>
					</div>
					<div className='flex flex-col gap-6 col-span-2 md:col-start-5 md:col-span-3'>
						<h5 className='text-2xl tracking-normal'>
							Website Designed & Developed by{" "}
							<a
								href='https://shakanksh.com'
								target='_blank'
								className='underline'>
								Shakanksh
							</a>
						</h5>
						{/* <div>
							<Link href='https://shakanksh.com/' target='_blank'>
								Shakanksh
							</Link>
						</div>*/}
					</div>
				</div>
				<div className='w-full translate-y-4 md:translate-y-12'>
					<img src='logo-footer.svg' alt='logo-footer' />
				</div>
			</div>
		</footer>
	);
}
