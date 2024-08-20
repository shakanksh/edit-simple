export default function Stats() {
	return (
		<section id='stats' className='section flex flex-col gap-32'>
			<div className='grid grid-cols-12 gap-8'>
				<p className='col-start-5 col-end-13 text-xl font-medium'>
					Our team boasts a impressive history of delivering high-impact
					results, leveraging their expertise to build lasting relationships and
					drive meaningful engagement.
				</p>
			</div>
			<div className='grid grid-cols-12 gap-x-8'>
				<div className='col-start-5 col-end-13 text-7xl flex flex-col gap-20'>
					<div className='stats-wrapper'>
						<h3 className='stats-number'>500+</h3>
						<h3>Videos Edited</h3>
					</div>
					<div className='stats-wrapper'>
						<h3 className='stats-number'>3M+</h3>
						<h3>Views Generated</h3>
					</div>
					<div className='stats-wrapper'>
						<h3 className='stats-number'>40+</h3>
						<h3>Satisfied Clients</h3>
					</div>
					<div className='stats-wrapper'>
						<h3>50+</h3>
						<h3>YT Channels Managed</h3>
					</div>
					<div className='stats-wrapper'>
						<h3>50+</h3>
						<h3>Reels Created</h3>
					</div>
					<div className='stats-wrapper'>
						<h3>4.8/5</h3>
						<h3>Average Rating</h3>
					</div>
				</div>
			</div>
		</section>
	);
}
