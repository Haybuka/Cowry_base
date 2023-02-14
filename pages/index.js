import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/index/banner.component'
import Stat from '../components/index/stat.component'
import Partners from '../components/index/partners.component'
import IndexTab from '../components/index/indextab.component'
import Services from '../components/index/services.component'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const request = await fetch(
    "https://cowry-website-portal-fhtk54mb6a-uc.a.run.app/api/testimonies",
    {
      headers: {
        Authorization:
          "Bearer dc9d252c2d58a8af15f95e305b1baceeed566d3f618ad2ded84b5a6e98d0ffdc94479435820ee67bf37b73e75e63f4ba428e1a53660c7a85e87ed3dac827066d4abf0765fc1356038a62b2a5a3b469d0cda2bf270ca38ee0f490891c046260e0db5d9d2f93cfc80bd956528d7872799289dc7baf4543f5e39def5aa74f67f375",
      },
    }
  );
  const data = await request.json();
  return {
    props: {
      testimony: data.data,
    },
  };
};

export default function Home({ testimony }) {
  return (
    <>
      <Head>
        <title>Home</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Banner />
      <Stat />
      <main className='md:px-[20px] lg:px-[100px]'>

        <Partners />
        <Services />
        <IndexTab testimony={testimony} />
      </main>
    </>
  )
}
