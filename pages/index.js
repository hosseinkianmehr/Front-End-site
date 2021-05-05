import { makeStyles } from '@material-ui/styles'
import Head from 'next/head'
import Cardbace from '../component/card/card'
import Cardlistcaeousels from '../component/Feature/Cardlistcaeousels'
import Carousels from '../component/Feature/Carousels'
import CarouselsSwiper from '../component/Feature/Carousels-Swiper'
import ListCard from '../component/Feature/ListCard'
import styles from '../styles/Home.module.css'
const mystyle = makeStyles(
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousels/>
      <ListCard/>
    <Cardlistcaeousels></Cardlistcaeousels>
    <CarouselsSwiper/>
    </div>
  )
}
