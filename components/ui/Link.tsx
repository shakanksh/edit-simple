interface props {
	children: React.ReactNode;
	href: string;
	target?: string;
}

export default function Link({ children, href, target }: props) {
	return (
		<a href={href} target={target}>
			<div>{children}</div>
		</a>
	);
}
