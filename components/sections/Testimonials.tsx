interface TestimonialsProps {
	children: string;
	name: string;
	image?: string;
	fallback?: string;
	socials?: string;
}

export default function Testimonials({
	children,
	name,
	image,
	fallback,
	socials,
}: TestimonialsProps) {
	return (
		<section
			id='testimonials'
			className='section w-full flex justify-center items-center py-52'>
			<div className='flex flex-col gap-5 text-2xl md:text-3xl items-center justify-center w-11/12 md:w-4/5'>
				<p className='font-medium'>"{children}"</p>
				<div className='font-semibold self-end'>
					<a href={socials} target='_blank' rel='noreferrer'>
						<p>- {name}</p>
					</a>
				</div>
			</div>
		</section>
	);
}
