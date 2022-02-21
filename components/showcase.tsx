import Image from 'next/image';
import Link from 'next/link';
import * as Schemas from '../types/schemas';

interface props {
	items: Schemas.ThemeSchema[];
}

const Showcase = (props: props) => {
	return (
		<div className="showcase-grid">
			{props.items.map((item, index) => {
				return (
					<Link key={index} href={`/theme/${item.user_id}`} passHref>
						<div className="showcase-flip-card">
							<div className="showcase-flip-card-inner">
								<div className="showcase-flip-card-front rounded-lg">
									<Image
										unoptimized
										src={item.preview}
										className="rounded-lg"
										alt=""
										width="225"
										height="320"
									/>
								</div>
								<div className="showcase-flip-card-back rounded-lg">
									<h1>
										<strong>{item.name}</strong>
									</h1>
									<p>
										<i>{item.author}</i>
									</p>
									<br />
									<p>Tags: {item.tags.join()}</p>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Showcase;
