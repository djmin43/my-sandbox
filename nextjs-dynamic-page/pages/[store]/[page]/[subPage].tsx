import { useRouter } from 'next/dist/client/router'
import React, { ReactNode } from 'react'

const Sample = (): ReactNode => {
  const router = useRouter()
  const { store } = router.query
  const { page } = router.query
  const { subPage } = router.query
  console.log(router.query)
  return (
    <div>
      id: { store } { page } { subPage }
    </div>
  )
}

export default Sample
