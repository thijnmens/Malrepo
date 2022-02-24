import React, { useEffect } from 'react';

const MediaNetAds = ({ id, size }: any) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			try {
				window._mNHandle.queue.push(() => {
					window._mNDetails.loadTag(id, size, id);
				});
			} catch (error) {}
		}
	}, [id, size]);

	return (
		<div className="mediaAdContainer">
			<div id={id} />
		</div>
	);
};

export default MediaNetAds;
