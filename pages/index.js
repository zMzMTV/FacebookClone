import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

export default function Home({ session }) {
  if (!session) return <Login />
  
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook clone, mobile first" />
        <link rel="icon" href="/FACEBOOK-LOGO-300.png" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="flex bg-gray-100">
        <SideBar />
        <Feed />
        <Widgets />
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
