import type { NextPage } from 'next';
import Head from 'next/head';
import Showcase from '../components/showcase';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const Home: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div>
			<Head>
				<title>MAL Repo</title>
				<meta name="description" content="The largest collection of MAL themes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Showcase items={data} />
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const res = await fetch(`https://api.malrepo.net/themes/all/${context.params?.page || 0}`);
	const data = await res.json();

	return { props: { data } };
};
