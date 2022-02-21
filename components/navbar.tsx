import Link from 'next/link';

export const navItems: {
	href: string;
	label: string;
}[] = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/dashboard',
		label: 'Dashboard',
	},
];

const Navbar = () => {
	return (
		<header className="bg-gradient-to-r from-blue-600 to-purple-700">
			<div className="max-w-6xl mx-auto p-6 text-white flex justify-between items-center">
				<div className="italic font-semibold text-2xl">
					{/* Logo */}
					<Link href="/" key="/">
						<a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">
							<strong>MAL</strong>Repo
						</a>
					</Link>
				</div>
				<nav className="hidden md:block">
					{navItems.map((link) => (
						<Link href={link.href} key={link.href}>
							<a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">
								{link.label}
							</a>
						</Link>
					))}
				</nav>
				<div className="hidden md:block">
					<Link href="/" key="/login">
						<a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">
							Log <strong>In</strong>
						</a>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
