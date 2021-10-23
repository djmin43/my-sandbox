import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const message = process.env.MESSAGE
  console.log(process.env.MESSAGE)
  return (
    <div className={styles.container}>
      {message}
    </div>
  )
}

export default Home
