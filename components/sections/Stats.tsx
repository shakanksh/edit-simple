const stats = [
	{
		number: "500+",
		name: "Videos Edited",
	},
	{
		number: "3M+",
		name: "Views Generated",
	},
	{
		number: "40+",
		name: "Satisfied Clients",
	},
	{
		number: "50+",
		name: "YT Channels Managed",
	},
	{
		number: "50+",
		name: "Reels Created",
	},
	{
		number: "4.8/5",
		name: "Average Client Rating",
	},
];

export default function Stats() {
	return (
		<section id='stats' className='section flex flex-col gap-32'>
			<div className='grid grid-cols-12 gap-8'>
				<p className='col-start-1 col-end-7 text-xl font-medium'>
					Our team boasts a impressive history of delivering high-impact
					results, leveraging their expertise to build lasting relationships and
					drive meaningful engagement.
				</p>
			</div>
			{/* <div className='grid grid-cols-12 gap-x-8'>
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
			</div> */}
			<div className='w-full'>
				{stats.map((stats, key) => (
					<div key={key} className='w-2/4'>
						<div className='flex gap-10 items-center'>
							<h2 className='text-5xl tracking-normal w-24'>{stats.number}</h2>
							<h2 className='text-5xl tracking-normal'>{stats.name}</h2>
						</div>
						<div className='h-[1px] bg-accent-600 w-full my-4' />
					</div>
				))}
			</div>
		</section>
	);
}
