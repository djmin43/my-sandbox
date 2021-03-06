import React, { ReactElement, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home: NextPage = () => {

  const [templates, setTempaltes] = useState('asdf')

  useEffect(() => {
    apiTest()
  }, [])

  const apiTest = async () => {
    const template: any = await axios.get('/api/templates')
    setTempaltes(template.data)
  }

  const title = React.createElement(Header);

  const templateList = {
    header: Header,
    body: Body,
    footer: Footer,
  }

  // const componentGenerator = (component: any) => {
  //   const getTemplate = templateList[component]
  //   return React.createElement(getTemplate)
  // }

  const props = [
    'header',
    'body',
    'body',
    'footer'
  ]

  return (
    <div>
      hello world
    </div>
  )
}

export const Header = () => {
  return (
    <div>
      hello my name is header
    </div>
  )
}

export const Body = () => {
  return (
    <div>
      hello my name is body. i have contents
    </div>
  )
}

export const Footer = () => {
  return (
    <div>
      hello my name is footer. i am at the bottom of every page :(
    </div>
  )
}

export default Home
