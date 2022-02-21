import type { NextPage } from 'next';
import Head from 'next/head';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}

const Download: NextPage = () => {
	const time = 0;
	return (
		<div>
			<Head>
				<title>Download is ready in {time}</title>
				<script
					async
					custom-element="amp-auto-ads"
					src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
				></script>
			</Head>

			<main>
				<div className="h-[100vh]">
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
