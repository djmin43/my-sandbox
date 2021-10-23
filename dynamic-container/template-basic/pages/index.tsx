import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const message = process.env.MESSAGE
  const sn = process.env.SN
  console.log(message, sn)
  return (
    <div className={styles.container}>
      message: {message}
      number: {sn}
    </div>
  )
}

export default Home
