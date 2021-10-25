import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const Home = () => {

  const [message, setMessage] = useState<string | undefined>('')
  const [sn, setSn] = useState<string | undefined>('')

  useEffect(() => {
    setMessage(process.env.NEXT_PUBLIC_MESSAGE)
    setSn(process.env.NEXT_PUBLIC_SN)
    console.log('public message', process.env.NEXT_PUBLIC_MESSAGE)
    console.log('public sn', process.env.NEXT_PUBLIC_SN)
    console.log('sn', process.env.SN)
  }, [])

  return (
    <div className={styles.container}>
      message: {message}
      sn: {sn}
    </div>
  )
}


export default Home
