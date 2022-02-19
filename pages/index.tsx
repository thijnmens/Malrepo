import type { NextPage } from 'next'
import Head from 'next/head'
import Showcase from '../components/showcase'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MAL Repo</title>
        <meta name="description" content="The largest collection of MAL themes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Showcase items={[
          {
            name: 'Modern',
            author: 'Thijnmens',
            id: 1,
            tags: ['Modern']
          },{
            name: 'Classic',
            author: 'Thijnmens',
            id: 2,
            tags: ['Classic']
          },{
            name: 'Old',
            author: 'Thijnmens',
            id: 3,
            tags: ['Old']
          },{
            name: 'Weird',
            author: 'Thijnmens',
            id: 4,
            tags: ['Weird']
          },{
            name: 'Funny',
            author: 'Thijnmens',
            id: 5,
            tags: ['Funny']
          },{
            name: 'Funny',
            author: 'Thijnmens',
            id: 6,
            tags: ['Funny']
          },{
            name: 'Funny',
            author: 'Thijnmens',
            id: 7,
            tags: ['Funny']
          },{
            name: 'Funny',
            author: 'Thijnmens',
            id: 8,
            tags: ['Funny']
          }
        ]}/>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
