import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="fixed bottom-0 left-0 w-screen bg-gray-800 text-gray-300">
			<div className="flex flex-auto flex-row text-center">
				<div className="max-w-3xl mx-auto p-5">© {new Date().getFullYear()} Malrepo</div>
				<div className="max-w-3xl mx-auto p-5">
					<Link href="/privacy" passHref>
						<h1 className="cursor-pointer">Privacy Policy</h1>
					</Link>
					<Link href="/tou" passHref>
						<h1 className="cursor-pointer">Terms of Use</h1>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
