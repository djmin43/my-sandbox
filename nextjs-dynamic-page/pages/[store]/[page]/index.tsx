import React, { ReactNode } from 'react'
import Head from 'next/head'

const index = (): ReactNode => {
  return (
    <div>
      <Head />
      <h1>
        this is header!
      </h1>
      hello index
      <div className="contianer">
        hello my name is container
      </div>
    </div>
  )
}

export default index
