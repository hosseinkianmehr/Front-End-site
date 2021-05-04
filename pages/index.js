import Head from 'next/head'
import Cardbace from '../component/card/card'
import Carousels from '../component/Feature/Carousels'
import ListCard from '../component/Feature/ListCard'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousels/>
      <ListCard/>
    
    </div>
  )
}
