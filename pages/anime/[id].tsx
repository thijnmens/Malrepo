import type { NextPage } from 'next'
import Head from 'next/head'

export async function getServerSideProps(context: any) {
	const res = await fetch(`http://localhost:3000/api/anime/${context.params.id}`)
	const data = await res.json()
  
	return { props: { data } }
}

const Anime: NextPage = (props) => {
	return (
		<div>
			<Head>
			<title>MAL Repo</title>
			</Head>

			<main>

			</main>

			<footer>
			</footer>

		</div>
	)
}

export default Anime