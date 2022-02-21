import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const resdata = await fetch(`https://api.malrepo.net/themes/get/${context.params.id}`);
	const resfile = await fetch(`https://api.malrepo.net/themes/download/${context.params.id}`);
	const jsondata = await resdata.json();
	const jsonfile = await resfile.json();

	return { props: { data: jsondata, file: jsonfile } };
};

const Anime: NextPage = ({
	data,
	file,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{data.name}</title>
			</Head>

			<main>
				<div className="w-full h-full">
					<Image
						unoptimized
						src={file.background}
						className=""
						alt=""
						width="1417"
						height="920"
						layout="responsive"
					/>
					<div className="absolute top-[30vh] left-[20vw] w-[60vw] h-[90vh] bg-gray-800">
						<div className="absolute top-[2vh] left-[20vw] w-[40vw] h-[20vh]">
							<h1 className="font-extrabold text-6xl">{data.name}</h1>
							<h4 className="">by: {data.author}</h4>
							<br />
							<Link passHref href={`/download?id=${router.query.id}`}>
								<button className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-3 hover:bg-gradient-to-l transition-all ease-in-out duration-250 hover:scale-105">
									Download
								</button>
							</Link>
						</div>
					</div>
					<div className="absolute top-[20vh] left-[22vw] w-[15vw] h-[15vh]">
						<Image
							unoptimized
							src={data.preview}
							className="rounded-lg"
							alt=""
							width="450"
							height="640"
							layout="responsive"
						/>
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
};

export default Anime;
