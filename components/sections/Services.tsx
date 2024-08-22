const services = [
	{
		name: "YouTube Automation",
		icon: "/services/yt.svg",
		alt: "YouTube Logo",
	},
	{
		name: "YouTube Shorts",
		icon: "/services/yt-shorts.svg",
		alt: "YouTube Shorts Logo",
	},
	{
		name: "Instagram Reels",
		icon: "/services/ig-reels.svg",
		alt: "Instagram Reels Logo",
	},
	{
		name: "TikTok Videos",
		icon: "/services/tiktok.svg",
		alt: "TikTok Logo",
	},
	{
		name: "Video Explainers",
		icon: "/services/video-explainers.svg",
		alt: "Video Explainers Icon",
	},
	{
		name: "Podcast Editing",
		icon: "/services/podcast.svg",
		alt: "Podcast Icon",
	},
	{
		name: "Green Screen Editing",
		icon: "/services/green-screen.svg",
		alt: "Green Screen Icon",
	},
	{
		name: "Motion Graphics",
		icon: "/services/motion-graphics.svg",
		alt: "Motion Graphics Icon",
	},
];

export default function Services() {
	return (
		<section id='services' className='section flex flex-col items-end'>
			{services.map((services, key) => (
				<div key={key} className='w-3/5'>
					<div className='flex gap-10 items-center'>
						<img src={services.icon} alt={services.alt} className='size-16' />
						<h2 className='text-5xl tracking-normal'>{services.name}</h2>
					</div>
					<div className='h-[1px] bg-accent-600 w-full my-4' />
				</div>
			))}
		</section>
	);
}
