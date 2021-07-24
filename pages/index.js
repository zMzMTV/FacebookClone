import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

export default function Home({ session }) {
  if (!session) return <Login />
  
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Clone of Facebook, mobile first" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <SideBar />
        <Feed />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}
