import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTimer from '../hooks/useTimer';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}

const download = (x: number) => {
	if (x === 0) {
		return (
			<Link passHref href={`/download`}>
				<button className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-3 hover:bg-gradient-to-l transition-all ease-in-out duration-250 hover:scale-105 translate-y-[45%]">
					Download
				</button>
			</Link>
		);
	} else {
		return (
			<Link passHref href={`/download`}>
				<button className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-3 translate-y-[45%]">
					<Image src="/Eclipse-1s-200px.svg" layout="fill" />
				</button>
			</Link>
		);
	}
};

const Download: NextPage = () => {
	const time = useTimer(5);
	return (
		<div>
			<Head>
				<title>Download is ready in {time}</title>
				<script
					async
					custom-element="amp-auto-ads"
					src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
				></script>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4713306956805377"
					crossOrigin="anonymous"
				></script>
			</Head>

			<main>
				<div className="m-auto translate-y-[50%] w-[60vw] h-[20vh] bg-gray-800">
					<div className="m-auto translate-y-[25%] h-full w-[80%] text-center">
						<h1 className="text-3xl">
							Your download will be ready in <strong>{time}</strong> seconds
						</h1>
						{download(time)}
					</div>
				</div>
				<div className="h-[20vh]">
					<amp-auto-ads
						type="adsense"
						data-ad-client="ca-pub-4713306956805377"
					></amp-auto-ads>
				</div>
			</main>

			<footer></footer>
		</div>
	);
};

export default Download;
