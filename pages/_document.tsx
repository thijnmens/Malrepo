import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4713306956805377"
					crossOrigin="anonymous"
				></script>
				<script type="text/javascript">
					window._mNHandle = window._mNHandle || {}; window._mNHandle.queue =
					window._mNHandle.queue || []; medianet_versionId = "3121199";
				</script>
				<script
					src="https://contextual.media.net/dmedianet.js?cid=8CU8IT8AJ"
					async
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
