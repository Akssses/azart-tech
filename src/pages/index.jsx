import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/shared/Header'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Websites from '@/components/home/Websites'
import Advantages from '@/components/home/Advantages'
import Product from '@/components/home/Product'
import Footer from '@/components/shared/Footer'
import Messenger from '@/components/home/Messenger'
import Stacks from '@/components/home/Stacks'
import Projects from '@/components/home/Projects'
import VideoAudit from '@/components/home/VideoAudit'
import Form from '@/components/home/Form'
import Question from '@/components/home/Question'
import StagesWork from '@/components/home/StagesWork'
import TeamSlider from '@/components/home/TeamSlider'
import Zoom from '@/components/shared/Zoom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Azart tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='lines'>
          <Header/>
          <Section1/>
        </div>
          <Section2/>


        <Websites/>

        <div className='container'>
          <Advantages/>
          <Product/>
          <Stacks/>
          <Messenger/>
        </div>
          <Projects/>
        <div className='container'>
          <Zoom/>
          <VideoAudit/>
        </div>
          <StagesWork/>
          <TeamSlider/>
        <div className='container'>
          <Question/>
          <Form/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
